import { Button } from "@/components/ui/button";
import Link from "next/link";
import DestinationCard from "../destination-card";

const DestinationSection = () => {
	return (
		<section className="container px-4 py-16 mx-auto">
			{/* Header */}
			<div className="mb-10 text-center">
				<h2 className="mb-3 text-3xl font-bold md:text-4xl text-primary">
					Temukan Pengalaman Perjalanan Terbaik
				</h2>
				<p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
					Jelajahi berbagai destinasi dan pengalaman menarik di seluruh
					Indonesia dan dunia.
				</p>
			</div>

			{/* Grid Card */}
			<div className="grid gap-6 mb-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 6 }).map((_, i) => (
					<DestinationCard key={i} />
				))}
			</div>

			{/* Load More */}
			<div className="text-center">
				<Link href="/destinations" className="inline-block">
					<Button
						variant="default"
						size="lg"
						className="px-8 py-4 font-semibold transition-all duration-300 rounded-2xl"
					>
						Lihat Selengkapnya
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default DestinationSection;
