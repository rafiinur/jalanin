"use client";

import { z } from "zod";
import { useRef } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormControl,
} from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { getUserSession } from "@/libs/auth";

import {
	createTravelPackage,
	updateTravelPackage,
} from "@/libs/travel-package";
import type { TravelPackage } from "@/types/travel-package";

const travelPackageSchema = z.object({
	name: z.string().min(1, "Nama wajib diisi"),
	description: z.string().optional(),
	total_cost: z.number().min(0),
	duration_days: z.number().min(1),
	start_date: z.string(),
	end_date: z.string(),
	image_url: z.any().optional(), // File atau string
	map_url: z.string().optional(),
	slug: z.string().optional(),
	group_id: z.string().min(1, "Group ID wajib diisi"),
});

type Props = {
	mode: "create" | "edit";
	travelPackage?: TravelPackage;
	onClose?: () => void;
};

const TravelPackageForm = ({ mode, travelPackage, onClose }: Props) => {
	const queryClient = useQueryClient();
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const { mutateAsync: createMutate } = useMutation({
		mutationFn: createTravelPackage,
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ["travel-packages"] }),
	});

	const { mutateAsync: updateMutate } = useMutation({
		mutationFn: ({ id, data }: { id: string; data: FormData }) =>
			updateTravelPackage(id, data),
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ["travel-packages"] }),
	});

	const form = useForm({
		resolver: zodResolver(travelPackageSchema),
		defaultValues: {
			name: travelPackage?.name ?? "",
			description: travelPackage?.description ?? "",
			total_cost: travelPackage?.total_cost ?? 0,
			duration_days: travelPackage?.duration_days ?? 1,
			start_date: travelPackage?.start_date ?? "",
			end_date: travelPackage?.end_date ?? "",
			image_url: "",
			group_id: travelPackage?.group_id ?? "",
			map_url: travelPackage?.map_url ?? "",
			slug: travelPackage?.slug ?? "",
		},
	});

	const onSubmit = async (data: z.infer<typeof travelPackageSchema>) => {
		try {
			const session = await getUserSession();
			const userId = session?.user?.id || "";

			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("description", data.description || "");
			formData.append("total_cost", String(data.total_cost));
			formData.append("duration_days", String(data.duration_days));
			formData.append("start_date", data.start_date);
			formData.append("end_date", data.end_date);
			formData.append("group_id", data.group_id);
			formData.append("slug", data.slug || "");
			formData.append("map_url", data.map_url || "");

			if (data.image_url instanceof File) {
				formData.append("image_url", data.image_url);
			} else if (mode === "edit" && travelPackage?.image_url) {
				formData.append("image_url", travelPackage.image_url);
			}

			if (mode === "create") {
				formData.append("created_by", userId);
				await createMutate(formData);
				toast.success("Paket berhasil ditambahkan.");
			} else if (mode === "edit" && travelPackage?.id) {
				formData.append("updated_by", userId);
				await updateMutate({ id: travelPackage.id, data: formData });
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
				className="grid grid-cols-4 md:grid-cols-4 gap-5 w-full"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Nama Paket</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="group_id"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Group ID</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Deskripsi</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="total_cost"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Total Biaya</FormLabel>
							<FormControl>
								<Input
									type="number"
									{...field}
									onChange={(e) => field.onChange(+e.target.value)}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="duration_days"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Durasi (hari)</FormLabel>
							<FormControl>
								<Input
									type="number"
									{...field}
									onChange={(e) => field.onChange(+e.target.value)}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="start_date"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tanggal Mulai</FormLabel>
							<FormControl>
								<Input type="date" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="end_date"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tanggal Selesai</FormLabel>
							<FormControl>
								<Input type="date" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Preview image */}
				{mode === "edit" && travelPackage?.image_url && (
					<div className="md:col-span-2">
						<Image
							src={travelPackage.image_url}
							alt="Image saat ini"
							width={200}
							height={120}
							className="rounded-md border"
						/>
						<p className="text-sm text-muted-foreground mt-1">
							Gambar saat ini
						</p>
					</div>
				)}

				<FormField
					control={form.control}
					name="image_url"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Gambar Baru</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									ref={fileInputRef}
									onChange={(e) => field.onChange(e.target.files?.[0])}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex flex-col md:flex-row justify-end items-center gap-3 md:col-span-2 pt-4">
					<DialogClose asChild>
						<Button variant="outline">Batal</Button>
					</DialogClose>
					<Button type="submit" disabled={form.formState.isSubmitting}>
						{mode === "edit" ? "Simpan Perubahan" : "Tambah Paket"}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default TravelPackageForm;
