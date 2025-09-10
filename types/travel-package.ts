export type TravelPackage = {
	id?: string;
	name: string;
	description: string;
	total_cost: number;
	duration_days: number;
	start_date: string;
	end_date: string;
	image_url: string;
	created_by: string;
	group_id: string;
	slug?: string;
	map_url?: string;
	created_at?: string;
};

export type ListProject = {
	id: string;
	title: string;
	description: string;
	travel_packages: TravelPackage[];
	youtubeUrl: string;
	tags: string[];
	created_at: string;
};
