"use client";

import type { Destination } from "@/types/destination";
import { SortingButton } from "@/components/sorting-button";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import DestinationEditDialog from "./destination-edit-dialog";
import DestinationDeleteDialog from "./destination-delete-dialog";

export const destinationColumns: ColumnDef<Destination>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortingButton column={column} label="Nama Destinasi" />
    ),
  },
  {
    accessorKey: "city",
    header: ({ column }) => <SortingButton column={column} label="Kota" />,
  },
  {
    accessorKey: "country",
    header: ({ column }) => <SortingButton column={column} label="Negara" />,
  },
  {
    accessorKey: "price",
    header: ({ column }) => <SortingButton column={column} label="Harga" />,
  },
  {
    accessorKey: "is_pet_friendly",
    header: ({ column }) => (
      <SortingButton column={column} label="Pet Friendly" />
    ),
    cell: ({ row }) =>
      row.getValue("is_pet_friendly") ? (
        <Badge className="bg-success-500">Ya</Badge>
      ) : (
        <Badge variant={"destructive"}>Tidak</Badge>
      ),
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const destination = row.original;
      const id = destination.id;
      const name = destination.name;

      if (!id) return null;

      return (
        <div className="flex items-center gap-1.5">
          <DestinationEditDialog destination={destination} />
          <DestinationDeleteDialog destinationId={id} destinationName={name} />
        </div>
      );
    },
  },
];
