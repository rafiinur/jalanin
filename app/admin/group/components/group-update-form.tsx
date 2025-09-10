"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormField,
	FormMessage,
} from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { getUserSession } from "@/libs/auth";
import { updateGroup } from "@/libs/group";
import Image from "next/image";
import type { Group } from "@/types/travel-group";

const groupSchema = z.object({
	name: z.string().min(1),
	type: z.string().min(1),
	description: z.string(),
	cover_image: z.union([z.instanceof(File), z.string()]),
});

type Props = {
	group: Group;
	onClose: () => void;
};

const GroupEditForm = ({ group, onClose }: Props) => {
	const queryClient = useQueryClient();

	const { mutateAsync: updateGroupMutate } = useMutation({
		mutationFn: ({
			groupId,
			formData,
		}: {
			groupId: string;
			formData: FormData;
		}) => updateGroup(groupId, formData),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["groups"] });
		},
	});

	const form = useForm<z.infer<typeof groupSchema>>({
		resolver: zodResolver(groupSchema),
		defaultValues: {
			name: group.name || "",
			type: group.type || "",
			description: group.description || "",
			cover_image: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof groupSchema>) => {
		try {
			const session = await getUserSession();
			const userId = session?.user?.id || "";

			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("type", data.type);
			formData.append("description", data.description);
			formData.append("created_by", userId);

			if (data.cover_image instanceof File) {
				formData.append("cover_image", data.cover_image);
			} else if (group.cover_image) {
				formData.append("cover_image", group.cover_image);
			}

			await updateGroupMutate({
				groupId: group.id!,
				formData,
			});

			toast.success("Paket berhasil diperbarui.");
			onClose();
		} catch (err) {
			console.error(err);
			toast.error("Gagal memperbarui paket.");
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nama Paket</FormLabel>
							<FormControl>
								<Input placeholder="Nama paket" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="type"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tipe</FormLabel>
							<FormControl>
								<Input placeholder="Tipe paket" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Deskripsi</FormLabel>
							<FormControl>
								<Textarea placeholder="Deskripsi" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="cover_image"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Cover Image</FormLabel>
							{group.cover_image && typeof group.cover_image === "string" && (
								<div className="mb-2">
									<Image
										src={group.cover_image}
										alt="Gambar saat ini"
										width={200}
										height={120}
										className="rounded"
									/>
									<p className="text-xs text-muted-foreground">
										Gambar saat ini
									</p>
								</div>
							)}
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									onChange={(e) => {
										const file = e.target.files?.[0];
										if (file) {
											field.onChange(file);
										}
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex justify-end gap-3 pt-4">
					<DialogClose asChild>
						<Button variant="outline">Batal</Button>
					</DialogClose>
					<Button type="submit" disabled={form.formState.isSubmitting}>
						{form.formState.isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default GroupEditForm;
