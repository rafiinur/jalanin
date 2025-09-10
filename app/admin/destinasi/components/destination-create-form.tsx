"use client";

import { z } from "zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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

import { destinationSchema } from "@/libs/schema";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Switch } from "@/components/ui/switch";
import { getUserSession } from "@/libs/auth";
import { DialogClose } from "@/components/ui/dialog";
import { createDestination } from "@/libs/destinations";

type DestinationFormProps = {
	onClose: () => void;
};

const DestinationCreateForm = ({ onClose }: DestinationFormProps) => {
	const queryClient = useQueryClient();
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const { mutateAsync: createDestinationMutate } = useMutation({
		mutationFn: createDestination,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["destinations"] });
		},
	});

	const form = useForm({
		resolver: zodResolver(destinationSchema),
		defaultValues: {
			name: "",
			description: "",
			city: "",
			country: "",
			price: 0,
			tags: "",
			image_url: undefined, // ubah dari "" ke undefined agar file bisa terbaca
			is_pet_friendly: false,
		},
	});

	const onSubmit = async (data: z.infer<typeof destinationSchema>) => {
		try {
			const formData = new FormData();
			const session = await getUserSession();
			const userId = session?.user?.id || "";
			formData.append("name", data.name);
			formData.append("description", data.description);
			formData.append("city", data.city);
			formData.append("country", data.country);
			formData.append("price", String(data.price));
			formData.append("is_pet_friendly", String(data.is_pet_friendly));
			formData.append("tags", data.tags);

			// Ganti image_url menjadi image agar sesuai dengan backend
			if (data.image_url instanceof File) {
				formData.append("image", data.image_url);
			} else {
				toast.error("Gambar wajib diunggah.");
				return;
			}
			formData.append("created_by", userId);

			await createDestinationMutate(formData);

			toast.success("Destinasi berhasil ditambahkan.");

			form.reset();
			onClose();
		} catch (err) {
			console.error(err);
			toast.error("Gagal menambahkan destinasi.");
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
			>
				{/* Name - Full width */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel className="text-base">Nama Destinasi</FormLabel>
							<FormControl>
								<Input placeholder="Masukkan nama destinasi" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Description - Full width */}
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel className="text-base">Deskripsi</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Masukkan deskripsi destinasi"
									className="min-h-32 resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* City */}
				<FormField
					control={form.control}
					name="city"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">Kota</FormLabel>
							<FormControl>
								<Input placeholder="Masukkan kota" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Country */}
				<FormField
					control={form.control}
					name="country"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">Negara</FormLabel>
							<FormControl>
								<Input placeholder="Masukkan negara" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Price */}
				<FormField
					control={form.control}
					name="price"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">Harga</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Masukkan harga"
									{...field}
									onChange={(e) => field.onChange(Number(e.target.value))}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Tags */}
				<FormField
					control={form.control}
					name="tags"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">
								Tags (pisahkan dengan koma)
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Contoh: alam, petualangan, pantai"
									{...field}
									onChange={(e) => {
										const value = e.target.value;
										field.onChange(value);
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Image Upload - Full width */}
				<FormField
					control={form.control}
					name="image_url"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel className="text-base">Upload Gambar Baru</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									ref={fileInputRef}
									onChange={(e) => {
										const file = e.target.files?.[0];
										if (file) {
											field.onChange(file);
										} else {
											field.onChange(undefined); // jika tidak ada file, set undefined
										}
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Is Pet Friendly */}
				<FormField
					control={form.control}
					name="is_pet_friendly"
					render={({ field }) => (
						<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm md:col-span-2">
							<div className="space-y-0.5">
								<FormLabel className="text-base">
									Boleh bawa hewan peliharaan?
								</FormLabel>
								<FormMessage />
							</div>
							<FormControl>
								<Switch
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				{/* Action Buttons - Full width */}
				<div className="flex flex-col md:flex-row justify-end items-center gap-3 md:col-span-2 pt-4">
					<DialogClose asChild>
						<Button variant="outline">Batal</Button>
					</DialogClose>

					<Button
						type="submit"
						className="w-full md:w-auto"
						disabled={form.formState.isSubmitting}
					>
						{form.formState.isSubmitting ? "Menyimpan..." : "Tambah"}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default DestinationCreateForm;
