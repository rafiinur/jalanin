import { getUserSession } from "./auth";

export const getAllTravelPackages = async () => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/packages`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch packages");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch packages:", error);
    throw error;
  }
};

export const getTravelPackageByCategory = async (categoryId: string) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/packages?category_id=${categoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch package by category");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch package by category:", error);
    throw error;
  }
};

export const createTravelPackage = async (formData: FormData) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/packages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
        body: formData, // kirim FormData langsung
      }
    );

    if (!response.ok) {
      throw new Error("Failed to insert package");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to insert package:", error);
    throw error;
  }
};

export const updateTravelPackage = async (
  packageId: string,
  formData: FormData
) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/packages?id=${packageId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update package");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to update package:", error);
    throw error;
  }
};

export const deleteTravelPackage = async (packageId: string) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("User not authenticated");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/packages?id=${packageId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete package");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to delete package:", error);
    throw error;
  }
};
