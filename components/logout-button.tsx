"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { logout } from "@/actions";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch {
      alert("Logout gagal, coba lagi.");
    }
  };

  return (
    <Button variant={"ghost"} onClick={handleLogout}>
      Logout
    </Button>
  );
}
