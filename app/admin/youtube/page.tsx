import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
// import YoutubeTable from "./youtube-table";

const YoutubePage = () => {
	return (
		<>
			<div className="flex items-center justify-between px-6 py-4 -mb-4 text-white bg-primary-600 rounded-t-2xl">
				<h1 className="text-xl font-bold text-white">Video Youtube</h1>
				<Button variant={"secondary"} className="text-white">
					<Plus />
					Tambah Paket
				</Button>
			</div>
			{/* <YoutubeTable /> */}
		</>
	);
};

export default YoutubePage;
