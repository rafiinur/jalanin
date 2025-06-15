"use server";

import { createClient } from "./utils/supabase/server";

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth-handler/login`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Login gagal.");
    }

    // Validasi dan ambil token dengan cara yang konsisten
    const { access_token, refresh_token } = data;
    if (!access_token || !refresh_token) {
      throw new Error("Token tidak valid.");
    }

    const supabase = await createClient();

    await supabase.auth.setSession({
      access_token,
      refresh_token,
    });

    return { success: true };
  } catch (err) {
    console.error("Login error:", err);
    return {
      success: false,
      message:
        err instanceof Error ? err.message : "Login gagal. Silakan coba lagi.",
    };
  }
};

export const register = async (email: string, password: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth-handler/register`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        cache: "no-store",
      }
    );

    // Check if response is ok
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Registrasi gagal.");
    }

    return { success: true };
  } catch (err) {
    console.error("Registration error:", err);
    return { success: false, message: "Registrasi gagal. Silakan coba lagi." };
  }
};

export const logout = async () => {
  try {
    const supabase = await createClient();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const accessToken = session?.access_token;
    const refreshToken = session?.refresh_token;

    if (!accessToken || !refreshToken) {
      throw new Error("Token tidak ditemukan.");
    }

    // ❌ Clear Supabase session
    await supabase.auth.signOut();

    return { success: true };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Logout gagal.");
  }
};
