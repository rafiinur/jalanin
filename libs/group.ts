import { getUserSession } from "./auth";

export const getAllGroups = async () => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/groups`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch destinations:", error);
    throw error;
  }
};

export const createGroup = async (formData: FormData) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("Not authenticated");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/groups`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
        body: formData,
      }
    );

    if (!res.ok) throw new Error("Gagal menyimpan destinasi");
    return await res.json();
  } catch (error) {
    console.error("Error creating destination:", error);
    throw error;
  }
};

export const updateGroup = async (groupId: string, formData: FormData) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/groups?id=${groupId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
        body: formData,
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update destination");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to update destination:", error);
    throw error;
  }
};

export const deleteGroup = async (groupId: string) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/groups?id=${groupId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    const responseData = await res.json().catch(() => ({}));

    return {
      ok: res.ok,
      status: res.status,
      data: responseData,
    };
  } catch (error) {
    console.error("Failed to delete group:", error);
    return {
      ok: false,
      status: 500,
      data: { message: "Failed to delete group" },
    };
  }
};
