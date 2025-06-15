"use client";

import type { User } from "@/types/user";
import { SortingButton } from "@/components/sorting-button";
import { Button } from "@/components/ui/button";
import { UserCircle, Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "full_name",
    header: ({ column }) => (
      <SortingButton column={column} label="Nama Lengkap" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortingButton column={column} label="Email" />,
  },
  {
    accessorKey: "role",
    header: ({ column }) => <SortingButton column={column} label="Peran" />,
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <SortingButton column={column} label="Bergabung Pada" />
    ),
  },
  {
    id: "actions",
    header: "Aksi",
    cell: () => (
      <div className="flex items-center gap-1.5">
        <Button size="icon" variant="secondary">
          <UserCircle className="size-5 text-white" />
        </Button>
        <Button size="icon" variant="destructive">
          <Trash className="size-5 text-white" />
        </Button>
      </div>
    ),
  },
];
