export const getAllGroups = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/groups`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    throw error;
  }
};

export const insertGroup = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/groups`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify({}),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to insert group");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to insert group:", error);
    throw error;
  }
};

export const updateGroup = async (groupId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/groups?id=${groupId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify({}),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update group");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to update group:", error);
    throw error;
  }
};
