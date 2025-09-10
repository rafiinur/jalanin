"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import DialogWrapper from "@/components/dialog-wrapper";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { deleteTravelPackage } from "@/libs/travel-package";

type Props = {
	packageId: string;
	packageName: string;
};

const TravelPackageDeleteDialog = ({ packageId, packageName }: Props) => {
	const queryClient = useQueryClient();
	const [loading, setLoading] = useState(false);

	const { mutateAsync: deletePackageMutate } = useMutation({
		mutationFn: deleteTravelPackage,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["travel-packages"] });
		},
	});

	const handleDelete = async (onClose: () => void) => {
		setLoading(true);
		try {
			const res = await deletePackageMutate(packageId);
			if (res.ok) {
				toast.success(`Paket ${packageName} berhasil dihapus.`);
				onClose();
			} else {
				toast.error(`Gagal menghapus paket ${packageName}.`);
			}
		} catch (err) {
			console.error("Error deleting travel package:", err);
			toast.error("Gagal menghapus paket.", {
				description: "Paket ini mungkin terkait dengan data lain.",
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
						Yakin ingin menghapus paket <b>{packageName}</b>?
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

export default TravelPackageDeleteDialog;
