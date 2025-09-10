import { getUserSession } from "./auth";

export const getAllIteneraries = async () => {
    try {
        const session = await getUserSession();
        if (!session?.access_token) throw new Error("User not authenticated");

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/iteneraries`,
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

export const createItenerary = async (formData: FormData) => {
    try {
        const session = await getUserSession();
        if (!session?.access_token) throw new Error("Not authenticated");

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/iteneraries`,
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

export const updateItenerary = async (
    iteneraryId: string,
    formData: FormData
) => {
    try {
        const session = await getUserSession();
        if (!session?.access_token) throw new Error("User not authenticated");

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/iteneraries?id=${iteneraryId}`,
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

export const deleteItenerary = async (iteneraryId: string) => {
    try {
        const session = await getUserSession();
        if (!session?.access_token) throw new Error("User not authenticated");

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/packages-handler/iteneraries?id=${iteneraryId}`,
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
        console.error("Failed to delete itenerary:", error);
        return {
            ok: false,
            status: 500,
            data: { message: "Failed to delete itenerary" },
        };
    }
};
