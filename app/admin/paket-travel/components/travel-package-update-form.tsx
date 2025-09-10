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
import { updateTravelPackage } from "@/libs/travel-package";
import Image from "next/image";
import type { TravelPackage } from "@/types/travel-package";

const schema = z.object({
	name: z.string().min(1, "Nama wajib diisi"),
	description: z.string().optional(),
	total_cost: z.number().min(0),
	duration_days: z.number().min(1),
	start_date: z.string(),
	end_date: z.string(),
	image_url: z.union([z.instanceof(File), z.string()]),
	group_id: z.string().min(1, "Group ID wajib diisi"),
	slug: z.string().optional(),
	map_url: z.string().optional(),
});

type Props = {
	travelPackage: TravelPackage;
	onClose: () => void;
};

const TravelPackageEditForm = ({ travelPackage, onClose }: Props) => {
	const queryClient = useQueryClient();

	const { mutateAsync } = useMutation({
		mutationFn: ({ id, formData }: { id: string; formData: FormData }) =>
			updateTravelPackage(id, formData),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["travel-packages"] });
		},
	});

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: travelPackage.name,
			description: travelPackage.description ?? "",
			total_cost: travelPackage.total_cost,
			duration_days: travelPackage.duration_days,
			start_date: travelPackage.start_date,
			end_date: travelPackage.end_date,
			image_url: "",
			group_id: travelPackage.group_id,
			slug: travelPackage.slug ?? "",
			map_url: travelPackage.map_url ?? "",
		},
	});

	const onSubmit = async (data: z.infer<typeof schema>) => {
		try {
			const session = await getUserSession();
			const userId = session?.user?.id || "";

			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("description", data.description || "");
			formData.append("total_cost", data.total_cost.toString());
			formData.append("duration_days", data.duration_days.toString());
			formData.append("start_date", data.start_date);
			formData.append("end_date", data.end_date);
			formData.append("group_id", data.group_id);
			formData.append("slug", data.slug || "");
			formData.append("map_url", data.map_url || "");
			formData.append("updated_by", userId);

			if (data.image_url instanceof File) {
				formData.append("image_url", data.image_url);
			} else if (travelPackage.image_url) {
				formData.append("image_url", travelPackage.image_url);
			}

			await mutateAsync({ id: travelPackage.id!, formData });

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
					name="group_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Group ID</FormLabel>
							<FormControl>
								<Input placeholder="ID Group" {...field} />
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

				<div className="grid grid-cols-2 gap-4">
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
										onChange={(e) => field.onChange(Number(e.target.value))}
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
										onChange={(e) => field.onChange(Number(e.target.value))}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="grid grid-cols-2 gap-4">
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
				</div>

				{travelPackage.image_url &&
					typeof travelPackage.image_url === "string" && (
						<div className="mb-2">
							<Image
								src={travelPackage.image_url}
								alt="Gambar saat ini"
								width={200}
								height={120}
								className="rounded"
							/>
							<p className="text-xs text-muted-foreground">Gambar saat ini</p>
						</div>
					)}

				<FormField
					control={form.control}
					name="image_url"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Cover Image</FormLabel>
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

export default TravelPackageEditForm;
