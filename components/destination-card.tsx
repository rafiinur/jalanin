import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = () => {
	return (
		<Card className="relative overflow-hidden transition-shadow duration-300 bg-white border-0 shadow-sm group hover:shadow-md rounded-2xl">
			<CardHeader className="relative p-0">
				<div className="relative overflow-hidden rounded-t-2xl aspect-video">
					<Image
						src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
						alt="Pantai Kuta dan Ubud, Bali"
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-105"
						priority
					/>
					<div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-100" />
					<Badge className="absolute px-2 py-1 font-medium top-3 left-3 bg-primary text-primary-foreground">
						Populer
					</Badge>
				</div>
			</CardHeader>

			<CardContent className="px-5 space-y-2">
				<div className="flex items-center gap-1.5 text-sm text-muted-foreground">
					<MapPin className="w-4 h-4" />
					<span>Bali, Indonesia</span>
				</div>

				<Link
					href="/paket/bali"
					className="block text-lg font-semibold transition-colors duration-200 text-foreground hover:text-primary"
				>
					Pesona Pantai Kuta & Ubud
				</Link>

				<p className="text-sm leading-relaxed text-muted-foreground">
					Nikmati keindahan pantai, budaya yang kaya, dan pengalaman tak
					terlupakan di Bali.
				</p>

				<div>
					<span className="text-lg font-semibold text-foreground">
						Rp 2.000.000
					</span>
					<span className="ml-1 text-sm text-muted-foreground">/orang</span>
				</div>
			</CardContent>
		</Card>
	);
};

export default DestinationCard;
