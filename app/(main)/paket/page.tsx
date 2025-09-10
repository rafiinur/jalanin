"use client";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import SearchBar from "@/components/search-bar";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import QuizSection from "@/components/sections/quiz";
import { getAllGroups } from "@/libs/group";
import { useEffect, useState } from "react";

export type TravelPackageGroup = {
	id: string;
	name: string;
	type: string;
	cover_image: string;
	description: string;
	created_at: string;
};

const InternationalGroups = () => {
	const [groups, setGroups] = useState<TravelPackageGroup[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchGroups = async () => {
			try {
				const data = await getAllGroups();
				setGroups(Array.isArray(data?.data) ? data.data : []);
			} catch {
				setGroups([]);
			} finally {
				setLoading(false);
			}
		};
		fetchGroups();
	}, []);

	// Filter hanya group dengan type international
	const internationalGroups = groups.filter((g) => g.type === "international");

	if (loading) {
		return (
			<span className="text-gray-400 col-span-full">
				Memuat destinasi internasional...
			</span>
		);
	}

	return (
		<section className="flex flex-col items-center w-full">
			<h2 className="mb-2 text-3xl font-bold text-center md:text-4xl text-secondary">
				Destinasi Internasional{" "}
				<span role="img" aria-label="globe">
					🌏
				</span>
			</h2>
			<span className="mb-12 text-2xl text-center text-secondary">
				Pilihan Terbaik untuk Anda Menjelajahi Dunia
			</span>
			<div className="grid w-full max-w-5xl grid-cols-2 gap-8 mb-8 md:grid-cols-4">
				{internationalGroups.length === 0 ? (
					<span className="text-gray-400 col-span-full">
						Tidak ada destinasi internasional.
					</span>
				) : null}
				{internationalGroups.map((group) => (
					<div key={group.id} className="flex flex-col items-center">
						<div className="w-[90px] h-[90px] rounded-2xl overflow-hidden mb-3">
							<Image
								src={group.cover_image || "/default-image.jpg"}
								alt={group.name}
								width={90}
								height={90}
								className="object-cover w-full h-full"
							/>
						</div>
						<h3 className="mb-1 text-lg font-semibold text-center text-secondary">
							{group.name}
						</h3>
						<p className="text-sm text-center text-gray-600 line-clamp-2">
							{group.description}
						</p>
						<span className="mt-1 text-xs text-gray-400">
							25 paket tersedia
						</span>
					</div>
				))}
			</div>
			<Link
				href="/destinasi/internasional"
				className="px-8 py-3 bg-[#e6ecf7] text-secondary rounded-2xl font-semibold text-lg hover:bg-[#d3e0f7] transition"
			>
				Lihat lebih banyak
			</Link>
		</section>
	);
};

const OurPackagesPage = () => {
	const packages = [
		{
			title: "Paket Wisata Lombok",
			price: "Rp 8,250,000",
			rating: 4.8,
			image:
				"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
		},
		{
			title: "Paket Wisata Yogyakarta",
			price: "Rp 5,500,000",
			rating: 4.6,
			image:
				"https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1000&auto=format&fit=crop",
		},
		{
			title: "Paket Wisata Malang",
			price: "Rp 4,750,000",
			rating: 4.7,
			image:
				"https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1000&auto=format&fit=crop",
		},
		{
			title: "Paket Wisata Bandung",
			price: "Rp 3,200,000",
			rating: 4.4,
			image:
				"https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
		},
	];

	return (
		<div className="container flex flex-col min-h-screen gap-8 mx-auto">
			{/* Search Bar */}
			<div className="px-20 py-36">
				<SearchBar />
			</div>

			<div className="relative mb-20">
				{/* Hero Image */}
				<div className="relative">
					<Image
						src="https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0"
						width={1180}
						height={364}
						alt="Cherry blossoms in Japan"
						className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
					/>

					{/* Overlay Text */}
					<div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent rounded-2xl" />
					<div className="absolute z-10 text-white top-1/3 left-8">
						<h1 className="mb-2 text-3xl font-bold md:text-4xl">
							Paket Terpopuler
						</h1>
						<p className="text-lg md:text-xl opacity-90">
							Yuk cari paket yang paling cocok untuk liburan mu!
						</p>
					</div>
				</div>

				{/* Carousel using shadcn/ui Carousel */}
				<div className="absolute w-full max-w-6xl transform -translate-x-1/2 -bottom-16 left-1/2">
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						className="w-full"
					>
						<CarouselContent className="p-2">
							{packages.map((pkg, index) => (
								<CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
									<Card className="p-0 overflow-hidden transition-all duration-300 border-0 shadow-lg hover:shadow-xl hover:-translate-y-1">
										<CardContent className="p-1">
											<Image
												width={400}
												height={200}
												src={pkg.image}
												alt={pkg.title}
												className="object-cover w-full h-48 rounded-2xl"
											/>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="text-2xl bg-white border-gray-200 shadow-lg -left-15 hover:bg-gray-50 size-10" />
						<CarouselNext className="text-2xl bg-white border-gray-200 shadow-lg -right-15 hover:bg-gray-50 size-10" />
					</Carousel>
				</div>
			</div>

			<InternationalGroups />

			<div className="flex flex-col items-center my-14">
				<h2 className="mb-5 text-3xl font-bold text-primary">
					Destinasi Domestik Favorit
				</h2>
				<span className="mb-20 text-2xl text-primary">
					Pilihan Terbaik untuk Menjelajahi Keindahan Tersembunyi di Seluruh
					Penjuru Nusantara
				</span>
				<div className="w-full h-[470px] mb-16 relative overflow-hidden rounded-2xl">
					<Image
						src={"/map-1.png"}
						alt="map"
						fill
						className="object-cover w-full h-full"
						priority
					/>
				</div>

				<Link
					href="/destinasi/domestik"
					className="px-6 py-2.5 bg-primary text-white rounded-2xl"
				>
					Lihat Lebih Banyak
				</Link>
			</div>

			<QuizSection />
		</div>
	);
};

export default OurPackagesPage;
