"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { z } from "zod";
import { getUserSession } from "@/libs/auth";
import { DialogClose } from "@/components/ui/dialog";
import Image from "next/image";

import { createGroup, updateGroup } from "@/libs/group";
import type { Group } from "@/types/travel-group";

const groupSchema = z.object({
	name: z.string().min(1, "Nama wajib diisi"),
	type: z.string().min(1, "Tipe wajib diisi"),
	description: z.string().optional(),
	cover_image: z.any().optional(), // bisa File atau string url
});

type GroupFormProps = {
	mode: "create" | "edit";
	group?: Group;
	onClose?: () => void;
};

const GroupForm = ({ mode, group, onClose }: GroupFormProps) => {
	const queryClient = useQueryClient();
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const { mutateAsync: createGroupMutate } = useMutation({
		mutationFn: createGroup,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["groups"] });
		},
	});

	const { mutateAsync: updateGroupMutate } = useMutation({
		mutationFn: ({ id, data }: { id: string; data: FormData }) =>
			updateGroup(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["groups"] });
		},
	});

	const form = useForm({
		resolver: zodResolver(groupSchema),
		defaultValues: {
			name: group?.name || "",
			type: group?.type || "",
			description: group?.description || "",
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
			formData.append("description", data.description || "");

			if (data.cover_image instanceof File) {
				formData.append("cover_image", data.cover_image);
			} else if (mode === "edit" && group?.cover_image) {
				formData.append("cover_image", group.cover_image);
			} else if (mode === "create") {
				toast.error("Gambar wajib diunggah.");
				return;
			}

			if (mode === "create") {
				formData.append("created_by", userId);
				await createGroupMutate(formData);
				toast.success("Paket berhasil ditambahkan.");
			} else if (mode === "edit" && group?.id) {
				formData.append("updated_by", userId);
				await updateGroupMutate({ id: group.id, data: formData });
				toast.success("Paket berhasil diperbarui.");
			}

			form.reset();
			onClose?.();
		} catch (err) {
			toast.error(
				mode === "create"
					? "Gagal menambahkan paket."
					: "Gagal memperbarui paket."
			);
			console.error(err);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
			>
				{/* Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Nama Paket</FormLabel>
							<FormControl>
								<Input placeholder="Masukkan nama paket" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Type */}
				<FormField
					control={form.control}
					name="type"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Tipe Paket</FormLabel>
							<FormControl>
								<Input
									placeholder="Contoh: domestic, international"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Description */}
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Deskripsi</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tulis deskripsi paket"
									className="min-h-[120px]"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Preview Gambar Lama */}
				{mode === "edit" && group?.cover_image && (
					<div className="md:col-span-2">
						<p className="text-sm text-muted-foreground mb-1">
							Gambar Saat Ini:
						</p>
						<Image
							width={192}
							height={128}
							src={group.cover_image}
							alt={group.name}
							className="w-48 h-auto rounded-md border"
						/>
					</div>
				)}

				{/* Upload Gambar Baru */}
				<FormField
					control={form.control}
					name="cover_image"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Upload Gambar Baru</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									ref={fileInputRef}
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

				{/* Tombol Aksi */}
				<div className="flex flex-col md:flex-row justify-end items-center gap-3 md:col-span-2 pt-4">
					<DialogClose asChild>
						<Button variant="outline">Batal</Button>
					</DialogClose>
					<Button
						type="submit"
						className="w-full md:w-auto"
						disabled={form.formState.isSubmitting}
					>
						{mode === "edit" ? "Simpan Perubahan" : "Tambah Group"}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default GroupForm;
