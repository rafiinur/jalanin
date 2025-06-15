import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
import type { ListYoutubeVideo } from "@/types/youtube";

const videos: ListYoutubeVideo[] = [
  {
    id: "1",
    title: "Belajar React",
    description: "Tutorial lengkap tentang React",
    thumbnailUrl: "https://example.com/thumbnail1.jpg",
    youtubeUrl: "https://youtube.com/watch?v=example1",
    tags: ["react", "javascript", "web development"],
  },
  {
    id: "2",
    title: "Belajar Next.js",
    description: "Panduan lengkap untuk Next.js",
    thumbnailUrl: "https://example.com/thumbnail2.jpg",
    youtubeUrl: "https://youtube.com/watch?v=example2",
    tags: ["nextjs", "react", "web development"],
  },
];

const YoutubeTable = () => {
  return <DataTable columns={columns} data={videos} filterKey="title" />;
};

export default YoutubeTable;
