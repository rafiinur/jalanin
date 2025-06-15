import { getUserSession } from "./auth";

export const getAllReviews = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reviews-handler`,
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

export const createReview = async (formData: FormData) => {
  try {
    const session = await getUserSession();
    if (!session?.access_token) throw new Error("Not authenticated");

    formData.append("user_id", session.user.id);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reviews-handler`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: formData,
      }
    );

    if (!res.ok) {
      throw new Error("Failed to insert review");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to insert review:", error);
    throw error;
  }
};

export const updateReview = async (reviewId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reviews-handler?id=${reviewId}`,
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
      throw new Error("Failed to update review");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to update review:", error);
    throw error;
  }
};

export const deleteReview = async (reviewId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reviews-handler?id=${reviewId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete review");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to delete review:", error);
    throw error;
  }
};
