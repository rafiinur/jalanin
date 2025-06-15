import { getUserSession } from "./auth";

export const getAllDestinations = async () => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/destinations-handler/destinations`,
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

export const createDestination = async (formData: FormData) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("Not authenticated");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/destinations-handler/destinations`,
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

export const updateDestination = async (
  destinationId: string,
  formData: FormData
) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/destinations-handler/destinations?id=${destinationId}`,
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

export const deleteDestination = async (destinationId: string) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/destinations-handler/destinations?id=${destinationId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete destination");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to delete destination:", error);
    throw error;
  }
};
