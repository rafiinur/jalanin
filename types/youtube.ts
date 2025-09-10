export type ContentYT = {
	id: string;
	title: string;
	description: string;
	youtube_url: string;
	thumbnail_url: string;
	tags: string[];
	created_at: string;
};

export type ListYoutubeVideo = {
	id: string;
	title: string;
	thumbnailUrl: string;
	youtubeUrl: string;
	tags: string[];
};
