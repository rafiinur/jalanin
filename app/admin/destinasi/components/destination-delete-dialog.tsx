// features/destination/components/destination-delete-dialog.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteDestination } from "@/libs/destinations";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { DialogClose } from "@/components/ui/dialog";
import DialogWrapper from "@/components/dialog-wrapper";
import { useState } from "react";

const DestinationDeleteDialog = ({
	destinationId,
	destinationName,
}: {
	destinationId: string;
	destinationName: string;
}) => {
	const queryClient = useQueryClient();
	const [loading, setLoading] = useState(false);

	const handleDelete = async (onClose: () => void) => {
		setLoading(true);
		try {
			const res = await deleteDestination(destinationId);
			if (res.ok) {
				toast.success(`Destinasi ${destinationName} berhasil dihapus.`);
				queryClient.invalidateQueries({ queryKey: ["destinations"] });
				onClose();
			} else {
				toast.error(`Gagal menghapus destinasi ${destinationName}.`);
			}
		} catch (error) {
			console.error("Error deleting destination:", error);
			toast.error(`Gagal menghapus destinasi`, {
				description:
					"Aduhh, destinasi ini sudah termasuk ke dalam suatu package yang tersedia",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<DialogWrapper
			trigger={
				<Button variant="destructive" size="icon">
					<Trash2 size={16} />
				</Button>
			}
		>
			{({ onClose }) => (
				<>
					<p>
						Apakah kamu yakin ingin menghapus destinasi <b>{destinationName}</b>
						?
					</p>
					<div className="mt-4 flex justify-end gap-2">
						<DialogClose asChild>
							<Button variant="outline" disabled={loading}>
								Batal
							</Button>
						</DialogClose>
						<Button
							variant="destructive"
							onClick={() => handleDelete(onClose)}
							disabled={loading}
						>
							{loading ? "Menghapus..." : "Hapus"}
						</Button>
					</div>
				</>
			)}
		</DialogWrapper>
	);
};

export default DestinationDeleteDialog;
