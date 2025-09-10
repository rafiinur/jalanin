"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { DialogClose } from "@/components/ui/dialog";
import DialogWrapper from "@/components/dialog-wrapper";
import { deleteGroup } from "@/libs/group";

const GroupDeleteDialog = ({
	groupId,
	groupName,
}: {
	groupId: string;
	groupName: string;
}) => {
	const queryClient = useQueryClient();
	const [loading, setLoading] = useState(false);

	const handleDelete = async (onClose: () => void) => {
		setLoading(true);
		try {
			const res = await deleteGroup(groupId);
			if (res.ok) {
				toast.success(`Paket ${groupName} berhasil dihapus.`);
				queryClient.invalidateQueries({ queryKey: ["groups"] });
				onClose();
			} else {
				toast.error(`Gagal menghapus paket ${groupName}.`);
			}
		} catch (error) {
			console.error("Error deleting group:", error);
			toast.error(`Gagal menghapus paket`, {
				description:
					"Paket ini mungkin sedang digunakan di tempat lain dan tidak bisa dihapus.",
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
						Apakah kamu yakin ingin menghapus paket <b>{groupName}</b>?
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

export default GroupDeleteDialog;
