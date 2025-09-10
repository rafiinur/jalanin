"use client";

import type { TravelPackage } from "@/types/travel-package";
import { ColumnDef } from "@tanstack/react-table";
import { SortingButton } from "@/components/sorting-button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import TravelPackageEditDialog from "./travel-edit-dialog";
import TravelPackageDeleteDialog from "./travel-delete-dialog";

export const travelPackageColumns: ColumnDef<TravelPackage>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortingButton column={column} label="Nama Paket" />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => <SortingButton column={column} label="Deskripsi" />,
    cell: ({ row }) => (
      <div className="line-clamp-2 text-muted-foreground">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    accessorKey: "total_cost",
    header: ({ column }) => <SortingButton column={column} label="Harga" />,
    cell: ({ row }) =>
      `Rp ${Number(row.getValue("total_cost")).toLocaleString("id-ID")}`,
  },
  {
    accessorKey: "duration_days",
    header: ({ column }) => (
      <SortingButton column={column} label="Durasi (hari)" />
    ),
  },
  {
    accessorKey: "start_date",
    header: ({ column }) => <SortingButton column={column} label="Mulai" />,
    cell: ({ row }) =>
      new Date(row.getValue("start_date")).toLocaleDateString("id-ID"),
  },
  {
    accessorKey: "end_date",
    header: ({ column }) => <SortingButton column={column} label="Selesai" />,
    cell: ({ row }) =>
      new Date(row.getValue("end_date")).toLocaleDateString("id-ID"),
  },
  {
    accessorKey: "image_url",
    header: "Gambar",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image_url") as string;
      return imageUrl ? (
        <Image
          src={imageUrl}
          alt="Thumbnail"
          width={80}
          height={60}
          className="rounded-md object-cover"
        />
      ) : (
        <Badge variant="outline">Tidak ada gambar</Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const travelPackage = row.original;
      const id = travelPackage.id;
      const name = travelPackage.name;

      if (!id) return null;

      return (
        <div className="flex items-center gap-1.5">
          <TravelPackageEditDialog travelPackage={travelPackage} />
          <TravelPackageDeleteDialog
            packageId={id}
            packageName={name}
          />
        </div>
      );
    },
  },
];