import { getUserSession } from "./auth";

export const getUserById = async (userId: string) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth-handler/user?${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update destination");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
};
