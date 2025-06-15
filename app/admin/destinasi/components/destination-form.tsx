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

import { destinationSchema } from "@/lib/schema";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Switch } from "@/components/ui/switch";
import { useRef } from "react";
import { z } from "zod";
import { getUserSession } from "@/lib/auth";
import { Destination } from "@/types/destination";
import { DialogClose } from "@/components/ui/dialog";
import Image from "next/image";
import { createDestination, updateDestination } from "@/lib/destinations";

type DestinationFormProps = {
  mode: "create" | "edit";
  destination?: Destination;
  onClose?: () => void;
};

const DestinationForm = ({ mode, destination }: DestinationFormProps) => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { mutateAsync: createDestinationMutate } = useMutation({
    mutationFn: createDestination,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["destinations"] });
    },
  });

  const { mutateAsync: updateDestinationMutate } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: FormData }) =>
      updateDestination(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["destinations"] });
    },
  });

  const form = useForm({
    resolver: zodResolver(destinationSchema),
    defaultValues: {
      name: destination?.name || "",
      description: destination?.description || "",
      city: destination?.city || "",
      country: destination?.country || "",
      price: destination?.price || 0,
      tags: Array.isArray(destination?.tags)
        ? destination?.tags.join(", ")
        : destination?.tags || "",
      is_pet_friendly: destination?.is_pet_friendly || false,
      image_url: destination?.image_url || "",
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
      (Array.isArray(data.tags)
        ? data.tags
        : data.tags.split(",").map((tag: string) => tag.trim())
      ).forEach((tag: string) => formData.append("tags", tag));

      if (data.image_url instanceof File) {
        formData.append("image_url", data.image_url);
      } else if (typeof data.image_url === "string") {
        formData.append("image_url", data.image_url);
      }

      if (mode === "create") {
        formData.append("created_by", userId);
        await createDestinationMutate(formData);
        toast.success("Destinasi berhasil ditambahkan.");
      } else if (mode === "edit" && destination?.id) {
        formData.append("updated_by", userId);
        await updateDestinationMutate({ id: destination.id, data: formData });
        toast.success("Destinasi berhasil diperbarui.");
      }

      form.reset();
    } catch (err) {
      toast.error(
        mode === "create"
          ? "Gagal menambahkan destinasi."
          : "Gagal memperbarui destinasi."
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
                  min={1}
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

        {/* Preview Gambar Lama - Full width */}
        {mode === "edit" && destination?.image_url && (
          <div className="md:col-span-2">
            <p className="text-sm text-muted-foreground mb-1">
              Gambar Saat Ini:
            </p>
            <Image
              width={192}
              height={128}
              src={destination.image_url}
              alt={destination.name}
              className="w-48 h-auto rounded-md border"
            />
          </div>
        )}

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
            {mode === "edit" ? "Simpan Perubahan" : "Tambah"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default DestinationForm;
