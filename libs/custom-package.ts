export const getUserCustomPackage = async (userId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/custom-packages-handler/custom-packages?user_id=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch custom package");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch custom package:", error);
    throw error;
  }
};

export const insertCustomPackage = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/custom-packages-handler/custom-packages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to insert custom package");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to insert custom package:", error);
    throw error;
  }
};

export const editCustomPackage = async (userId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/custom-packages-handler/custom-packages?id=${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to edit custom package");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to edit custom package:", error);
    throw error;
  }
};

export const deleteCustomPackage = async (userId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/custom-packages-handler/custom-packages?id=${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete custom package");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to delete custom package:", error);
    throw error;
  }
};
