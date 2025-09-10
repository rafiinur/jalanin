"use client";

import { z } from "zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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

import { DialogClose } from "@/components/ui/dialog";
import { createGroup } from "@/libs/group";
import { getUserSession } from "@/libs/auth";

const groupSchema = z.object({
	name: z.string().min(1, "Nama wajib diisi"),
	type: z.string().min(1, "Tipe wajib diisi"),
	description: z.string(),
	cover_image: z.instanceof(File),
});

type GroupFormData = z.infer<typeof groupSchema>;

const GroupCreateForm = ({ onClose }: { onClose: () => void }) => {
	const queryClient = useQueryClient();
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const { mutateAsync: createGroupMutate } = useMutation({
		mutationFn: createGroup,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["groups"] });
		},
	});

	const form = useForm<GroupFormData>({
		resolver: zodResolver(groupSchema),
		defaultValues: {
			name: "",
			type: "",
			description: "",
			cover_image: undefined as unknown as File,
		},
	});

	const onSubmit = async (data: GroupFormData) => {
		try {
			const session = await getUserSession();
			const userId = session?.user?.id || "";

			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("type", data.type);
			formData.append("description", data.description);
			formData.append("cover_image", data.cover_image);
			formData.append("created_by", userId);

			await createGroupMutate(formData);
			toast.success("Paket berhasil ditambahkan.");
			form.reset();
			onClose();
		} catch (err) {
			console.error(err);
			toast.error("Gagal menambahkan paket.");
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
								<Input placeholder="Masukkan nama paket" {...field} />
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

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Deskripsi</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Deskripsikan paket"
									className="min-h-[120px]"
									{...field}
								/>
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
							<FormLabel>Upload Gambar</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									ref={fileInputRef}
									onChange={(e) => {
										const file = e.target.files?.[0];
										if (file) field.onChange(file);
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
						{form.formState.isSubmitting ? "Menyimpan..." : "Tambah Group"}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default GroupCreateForm;
