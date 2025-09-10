"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SortingButton } from "@/components/sorting-button";
import { Badge } from "@/components/ui/badge";
import type { Group } from "@/types/travel-group";
import GroupEditDialog from "./group-edit-dialog";
import GroupDeleteDialog from "./group-delete-dialog";
import Image from "next/image";

export const groupColumns: ColumnDef<Group>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => (
			<SortingButton column={column} label="Nama Paket" />
		),
	},
	{
		accessorKey: "type",
		header: ({ column }) => <SortingButton column={column} label="Tipe" />,
		cell: ({ row }) => {
			const value = row.getValue("type") as string;
			return <Badge className="capitalize">{value}</Badge>;
		},
	},
	{
		accessorKey: "cover_image",
		header: "Cover",
		cell: ({ row }) => {
			const url = row.getValue("cover_image") as string;
			return url ? (
				<Image
					src={url}
					alt="Cover"
					width={64}
					height={40}
					className="object-cover w-16 h-10 rounded"
				/>
			) : (
				<span className="text-muted-foreground">Tidak ada</span>
			);
		},
	},
	{
		accessorKey: "description",
		header: ({ column }) => <SortingButton column={column} label="Deskripsi" />,
		cell: ({ row }) => {
			const desc = row.getValue("description") as string;
			return <span>{desc.slice(0, 50)}...</span>; // Potong jika terlalu panjang
		},
	},
	{
		accessorKey: "created_at",
		header: ({ column }) => (
			<SortingButton column={column} label="Dibuat Pada" />
		),
		cell: ({ row }) => {
			const date = new Date(row.getValue("created_at") as string);
			return <span>{date.toLocaleDateString()}</span>;
		},
	},
	{
		id: "actions",
		header: "Aksi",
		cell: ({ row }) => {
			const group = row.original;
			const id = group.id;
			const name = group.name;

			if (!id) return null;

			return (
				<div className="flex items-center gap-1.5">
					<GroupEditDialog group={group} />
					<GroupDeleteDialog groupId={id} groupName={name} />
				</div>
			);
		},
	},
];
