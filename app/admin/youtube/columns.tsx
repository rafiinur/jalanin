"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { ListProject } from "@/types/travel-package";
import { SquarePen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SortingButton } from "@/components/sorting-button";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<ListProject>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => <SortingButton column={column} label="Judul" />,
  },
  {
    accessorKey: "description",
    header: ({ column }) => <SortingButton column={column} label="Desripsi" />,
  },
  {
    accessorKey: "youtubeUrl",
    header: ({ column }) => (
      <SortingButton column={column} label="Youtube URL" />
    ),
  },
  {
    accessorKey: "tags",
    header: ({ column }) => <SortingButton column={column} label="Tag" />,
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1">
        {(row.getValue("tags") as string[]).map(
          (tag: string, index: number) => (
            <Badge key={index}>{tag}</Badge>
          )
        )}
      </div>
    ),
  },
  {
    id: "actions",
    header: "Aksi",
    cell: () => (
      <div className="flex items-center gap-1.5">
        <Button size="icon" variant={"secondary"}>
          <SquarePen className="size-5 text-white" />
        </Button>
        <Button size="icon" variant={"destructive"}>
          <Trash className="size-5 text-white" />
        </Button>
      </div>
    ),
  },
];
