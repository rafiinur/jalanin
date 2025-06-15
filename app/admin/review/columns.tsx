"use client";

import { Review } from "@/types/review";
import { SortingButton } from "@/components/sorting-button";
import { Button } from "@/components/ui/button";
import { MessageCircle, Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

export const reviewColumns: ColumnDef<Review>[] = [
  {
    accessorKey: "user_id",
    header: ({ column }) => <SortingButton column={column} label="User ID" />,
  },
  {
    accessorKey: "rating",
    header: ({ column }) => <SortingButton column={column} label="Rating" />,
    cell: ({ row }) => "⭐".repeat(row.getValue("rating")),
  },
  {
    accessorKey: "comment",
    header: ({ column }) => <SortingButton column={column} label="Komentar" />,
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => <SortingButton column={column} label="Tanggal" />,
  },
  {
    id: "actions",
    header: "Aksi",
    cell: () => (
      <div className="flex items-center gap-1.5">
        <Button size="icon" variant="secondary">
          <MessageCircle className="size-5 text-white" />
        </Button>
        <Button size="icon" variant="destructive">
          <Trash className="size-5 text-white" />
        </Button>
      </div>
    ),
  },
];
