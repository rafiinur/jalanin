"use client";

import { z } from "zod";
import { useEffect, useRef } from "react";
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

import { travelPackageSchema } from "@/lib/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserSession } from "@/lib/auth";
import { DialogClose } from "@/components/ui/dialog";
import { createTravelPackage } from "@/lib/travel-package";

const TravelPackageCreateForm = ({ onClose }: { onClose: () => void }) => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { mutateAsync: createTravelPackageMutate } = useMutation({
    mutationFn: createTravelPackage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["travel-packages"] });
    },
  });

  const form = useForm({
    resolver: zodResolver(travelPackageSchema),
    defaultValues: {
      name: "",
      description: "",
      total_cost: 0,
      duration_days: 1,
      start_date: "",
      end_date: "",
      image_url: undefined,
      created_by: "",
      group_id: "",
    },
  });

  // Auto calculate duration_days when start_date or end_date changes
  const startDate = form.watch("start_date");
  const endDate = form.watch("end_date");
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && end >= start) {
        // +1 agar inklusif (misal: 1-3 = 3 hari)
        const diff =
          Math.floor(
            (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
          ) + 1;
        form.setValue("duration_days", diff);
      }
    }
  }, [startDate, endDate, form]);

  const onSubmit = async (data: z.infer<typeof travelPackageSchema>) => {
    try {
      const formData = new FormData();
      const session = await getUserSession();
      const userId = session?.user?.id || "";
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("total_cost", String(data.total_cost));
      formData.append("duration_days", String(data.duration_days));
      formData.append("start_date", data.start_date);
      formData.append("end_date", data.end_date);

      if (data.image_url instanceof File) {
        formData.append("image", data.image_url);
      } else {
        toast.error("Gambar wajib diunggah.");
        return;
      }
      formData.append("created_by", userId);
      formData.append("group_id", data.group_id);
      await createTravelPackageMutate(formData);
      toast.success("Paket travel berhasil ditambahkan.");
      form.reset();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Gagal menambahkan paket travel.");
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
              <FormLabel className="text-base">Nama Paket</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan nama paket" {...field} />
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
                  placeholder="Masukkan deskripsi paket"
                  className="min-h-32 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Total Cost */}
        <FormField
          control={form.control}
          name="total_cost"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Total Biaya</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan total biaya"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Duration Days */}
        <FormField
          control={form.control}
          name="duration_days"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Durasi (hari)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan durasi"
                  {...field}
                  readOnly // agar user tidak bisa input manual, hanya otomatis
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Start Date */}
        <FormField
          control={form.control}
          name="start_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Tanggal Mulai</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* End Date */}
        <FormField
          control={form.control}
          name="end_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Tanggal Selesai</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
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
              <FormLabel className="text-base">Upload Gambar</FormLabel>
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
                      field.onChange(undefined);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Group ID */}
        <FormField
          control={form.control}
          name="group_id"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel className="text-base">Group ID</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan Group ID" {...field} />
              </FormControl>
              <FormMessage />
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

export default TravelPackageCreateForm;
