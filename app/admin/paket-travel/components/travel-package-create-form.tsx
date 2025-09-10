"use client";

import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { travelPackageSchema } from "@/libs/schema";
import { createTravelPackage } from "@/libs/travel-package";
import { getUserSession } from "@/libs/auth";
import { getAllGroups } from "@/libs/group";
import { getAllCategories } from "@/libs/category";
import { getAllDestinations } from "@/libs/destinations";

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const TravelPackageCreateForm = ({ onClose }: { onClose: () => void }) => {
	const queryClient = useQueryClient();
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const [groups, setGroups] = useState<{ id: string; name: string }[]>([]);
	const [categories, setCategories] = useState<{ id: string; name: string }[]>(
		[]
	);
	const [destinations, setDestinations] = useState<
		{ id: string; name: string }[]
	>([]);

	const form = useForm<z.infer<typeof travelPackageSchema>>({
		resolver: zodResolver(travelPackageSchema),
		defaultValues: {
			name: "",
			description: "",
			total_cost: 0,
			duration_days: 1,
			start_date: "",
			end_date: "",
			image_url: undefined,
			group_id: "",
			map_url: "",
			category_ids: [],
			destination_ids: [],
			packing_items: [],
			includes: [],
			excludes: [],
			highlights: [],
		},
	});

	const { mutateAsync: createTravelPackageMutate } = useMutation({
		mutationFn: createTravelPackage,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["travel-packages"] });
		},
	});

	const startDate = form.watch("start_date");
	const endDate = form.watch("end_date");

	useEffect(() => {
		if (startDate && endDate) {
			const start = new Date(startDate);
			const end = new Date(endDate);
			if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && end >= start) {
				const diff =
					Math.floor(
						(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
					) + 1;
				form.setValue("duration_days", diff);
			}
		}
	}, [startDate, endDate, form]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [groupRes, categoryRes, destinationRes] = await Promise.all([
					getAllGroups(),
					getAllCategories(),
					getAllDestinations(),
				]);

				setGroups(groupRes.data || []);
				setCategories(categoryRes.data || []);
				setDestinations(destinationRes.data || []);
			} catch (err) {
				toast.error("Gagal memuat data dropdown.");
				console.error(err);
			}
		};

		fetchData();
	}, []);

	const onSubmit = async (data: z.infer<typeof travelPackageSchema>) => {
		try {
			const session = await getUserSession();
			const userId = session?.user?.id || "";

			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("description", data.description);
			formData.append("total_cost", String(data.total_cost));
			formData.append("duration_days", String(data.duration_days));
			formData.append("start_date", data.start_date);
			formData.append("end_date", data.end_date);
			formData.append("map_url", data.map_url);
			formData.append("group_id", data.group_id);
			formData.append("created_by", userId);

			if (data.image_url instanceof File) {
				formData.append("image", data.image_url);
			} else {
				toast.error("Gambar wajib diunggah.");
				return;
			}

			formData.append("category_ids", JSON.stringify(data.category_ids));
			formData.append("destination_ids", JSON.stringify(data.destination_ids));
			formData.append("packing_items", JSON.stringify(data.packing_items));
			formData.append("includes", JSON.stringify(data.includes));
			formData.append("excludes", JSON.stringify(data.excludes));
			formData.append("highlights", JSON.stringify(data.highlights));

			await createTravelPackageMutate(formData);
			toast.success("Paket travel berhasil ditambahkan.");
			form.reset();
			onClose();
		} catch (err) {
			console.error(err);
			toast.error("Gagal menambahkan paket travel.");
		}
	};

	const renderCheckboxGroup = (
		name: "category_ids" | "destination_ids",
		label: string,
		items: { id: string; name: string }[]
	) => (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className="md:col-span-2">
					<FormLabel>{label}</FormLabel>
					<div className="grid gap-2">
						{items.map((item) => (
							<label key={item.id} className="flex items-center gap-2">
								<input
									type="checkbox"
									value={item.id}
									checked={field.value.includes(item.id)}
									onChange={(e) => {
										const checked = e.target.checked;
										const value = e.target.value;
										field.onChange(
											checked
												? [...field.value, value]
												: field.value.filter((v) => v !== value)
										);
									}}
								/>
								{item.name}
							</label>
						))}
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	);

	const renderCommaInput = (
		name: "packing_items" | "includes" | "excludes" | "highlights",
		label: string
	) => (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className="md:col-span-2">
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							placeholder="Pisahkan dengan koma"
							onChange={(e) =>
								field.onChange(
									e.target.value
										.split(",")
										.map((item) => item.trim())
										.filter(Boolean)
								)
							}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[90vh] overflow-y-auto p-4"
			>
				{/* Nama Paket */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Nama Paket</FormLabel>
							<FormControl>
								<Input placeholder="Nama Paket" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Deskripsi */}
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Deskripsi</FormLabel>
							<FormControl>
								<Textarea className="min-h-32" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Total Biaya */}
				<FormField
					control={form.control}
					name="total_cost"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Total Biaya</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Rp"
									{...field}
									onChange={(e) => field.onChange(Number(e.target.value))}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Durasi */}
				<FormField
					control={form.control}
					name="duration_days"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Durasi (hari)</FormLabel>
							<FormControl>
								<Input type="number" readOnly {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Tanggal */}
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

				{/* Upload Gambar */}
				<FormField
					control={form.control}
					name="image_url"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Upload Gambar</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									ref={fileInputRef}
									onChange={(e) => {
										const file = e.target.files?.[0];
										field.onChange(file || undefined);
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Map URL */}
				<FormField
					control={form.control}
					name="map_url"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>URL Lokasi (Google Maps)</FormLabel>
							<FormControl>
								<Input placeholder="https://goo.gl/maps/..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Group Dropdown */}
				<FormField
					control={form.control}
					name="group_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Group</FormLabel>
							<Select onValueChange={field.onChange} value={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Pilih Group" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{groups.map((group) => (
										<SelectItem key={group.id} value={group.id}>
											{group.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Category & Destination Checkboxes */}
				{renderCheckboxGroup("category_ids", "Kategori", categories)}
				{renderCheckboxGroup("destination_ids", "Destinasi", destinations)}

				{/* Packing & Info */}
				{renderCommaInput("packing_items", "Barang Bawaan")}
				{renderCommaInput("includes", "Termasuk")}
				{renderCommaInput("excludes", "Tidak Termasuk")}
				{renderCommaInput("highlights", "Highlight")}

				{/* Tombol Aksi */}
				<div className="flex justify-end gap-3 md:col-span-2 pt-4">
					<DialogClose asChild>
						<Button variant="outline">Batal</Button>
					</DialogClose>
					<Button type="submit" disabled={form.formState.isSubmitting}>
						{form.formState.isSubmitting ? "Menyimpan..." : "Tambah"}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default TravelPackageCreateForm;
