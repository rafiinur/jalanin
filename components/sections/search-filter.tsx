"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEvent, useEffect, useState } from "react";
import { getAllTravelPackages } from "@/libs/travel-package";
import { TravelPackage } from "@/types/travel-package";
import PackageCard from "../package-card";

const tripStyles = [
	"Pantai",
	"Sejarah",
	"Budaya",
	"Spiritual",
	"Arsitektur",
	"Taman",
	"Futuristik",
	"gunung",
	"Air Terjun",
	"Indoor",
	"Romansa",
	"Petualangan",
	"Kota",
	"Museum",
	"Seni",
	"Kuliner",
	"Belanja",
	"Romansa",
	"Teknologis",
];

const SearchFilterSection = () => {
	const [packages, setPackages] = useState<TravelPackage[]>([]);
	const [loading, setLoading] = useState(true);
	const [fromCity, setFromCity] = useState("");
	const [toCity, setToCity] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
	// Pagination state
	const [page, setPage] = useState(1);
	const pageSize = 5; // tampilkan 5 card per halaman
	const totalPages = Math.ceil(packages.length / pageSize);

	useEffect(() => {
		const fetchPackages = async () => {
			try {
				const data = await getAllTravelPackages();
				setPackages(Array.isArray(data?.data) ? data.data : []);
			} catch (error) {
				console.error("Error fetching travel packages:", error);
				setPackages([]);
			} finally {
				setLoading(false);
			}
		};
		fetchPackages();
	}, []);

	// Filtering logic
	const filteredPackages = packages.filter((pkg) => {
		// City filter (simple contains, adjust as needed)
		const fromMatch = fromCity
			? pkg.name.toLowerCase().includes(fromCity.toLowerCase())
			: true;
		const toMatch = toCity
			? pkg.description.toLowerCase().includes(toCity.toLowerCase())
			: true;
		// Price filter
		const min = minPrice ? parseInt(minPrice.replace(/\D/g, "")) : undefined;
		const max = maxPrice ? parseInt(maxPrice.replace(/\D/g, "")) : undefined;
		const price = pkg.total_cost;
		const priceMatch =
			(min === undefined || price >= min) &&
			(max === undefined || price <= max);
		// Trip style filter (assume style is in description, adjust as needed)
		const styleMatch =
			selectedStyles.length === 0 ||
			selectedStyles.some((style) =>
				pkg.description.toLowerCase().includes(style.toLowerCase())
			);
		return fromMatch && toMatch && priceMatch && styleMatch;
	});

	const paginatedPackages = filteredPackages.slice(
		(page - 1) * pageSize,
		page * pageSize
	);

	return (
		<div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
			{/* Filters Sidebar */}
			<div className="flex flex-col gap-6 lg:col-span-1">
				{/* Start & End City */}
				<Card className="p-6 border shadow-lg border-neutral-200">
					<CardHeader className="p-0 mb-4">
						<CardTitle className="text-lg font-semibold text-gray-900">
							Start & Ending City
						</CardTitle>
					</CardHeader>
					<CardContent className="p-0 space-y-4">
						<div>
							<Label className="block mb-1 text-sm text-gray-600">From</Label>
							<Input
								placeholder="Search city"
								className="h-9"
								value={fromCity}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setFromCity(e.target.value)
								}
							/>
						</div>
						<div>
							<Label className="block mb-1 text-sm text-gray-600">To</Label>
							<Input
								placeholder="Search city"
								className="h-9"
								value={toCity}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setToCity(e.target.value)
								}
							/>
						</div>
					</CardContent>
				</Card>

				{/* Price Range */}
				<Card className="p-6 border shadow-lg border-neutral-200">
					<CardHeader className="p-0 mb-4">
						<CardTitle className="text-lg font-semibold text-gray-900">
							Price Range
						</CardTitle>
					</CardHeader>
					<CardContent className="p-0 space-y-4">
						<div>
							<Label className="block mb-1 text-sm text-gray-600">Lowest</Label>
							<Input
								placeholder="e.g. 1.000.000"
								className="h-9"
								value={minPrice}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setMinPrice(e.target.value)
								}
							/>
						</div>
						<div>
							<Label className="block mb-1 text-sm text-gray-600">
								Highest
							</Label>
							<Input
								placeholder="e.g. 10.000.000"
								className="h-9"
								value={maxPrice}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setMaxPrice(e.target.value)
								}
							/>
						</div>
					</CardContent>
				</Card>

				{/* Trip Style */}
				<Card className="p-6 border shadow-lg border-neutral-200">
					<CardHeader className="p-0 mb-4">
						<CardTitle className="text-lg font-semibold text-gray-900">
							Trip Style
						</CardTitle>
					</CardHeader>
					<CardContent className="p-0 space-y-3">
						{tripStyles.map((style) => (
							<div key={style} className="flex items-center gap-3">
								<Checkbox
									id={style.toLowerCase().replace(/\s/g, "-")}
									checked={selectedStyles.includes(style)}
									onCheckedChange={(checked) => {
										setSelectedStyles((prev) =>
											checked
												? [...prev, style]
												: prev.filter((s) => s !== style)
										);
									}}
								/>
								<Label htmlFor={style.toLowerCase().replace(/\s/g, "-")}>
									{style}
								</Label>
							</div>
						))}
					</CardContent>
					<CardFooter className="p-0 mt-4">
						<Button variant="link" className="p-0 text-blue-600">
							Show More
						</Button>
					</CardFooter>
				</Card>
			</div>

			{/* Package Cards */}
			<div className="flex flex-col gap-6 px-4 lg:col-span-3">
				{loading ? (
					<div>Loading packages...</div>
				) : paginatedPackages.length === 0 ? (
					<div>Tidak ada paket ditemukan.</div>
				) : (
					paginatedPackages.map((pkg) => (
						<PackageCard
							key={pkg.id}
							image={pkg.image_url}
							title={pkg.name}
							href={pkg.id ? `/paket/${pkg.id}` : undefined}
							price={
								pkg.total_cost
									? `Rp${pkg.total_cost.toLocaleString("id-ID")}`
									: "-"
							}
							duration={
								pkg.duration_days ? `${pkg.duration_days} days` : undefined
							}
						/>
					))
				)}
				{/* Pagination Controls */}
				{totalPages > 1 && (
					<div className="flex items-center justify-center gap-2 mt-6">
						<button
							className="px-3 py-1 text-gray-700 bg-gray-200 rounded disabled:opacity-50"
							onClick={() => setPage((p) => Math.max(1, p - 1))}
							disabled={page === 1}
						>
							Previous
						</button>
						{Array.from({ length: totalPages }).map((_, idx) => (
							<button
								key={idx + 1}
								className={`px-3 py-1 rounded ${
									page === idx + 1
										? "bg-blue-500 text-white"
										: "bg-gray-100 text-gray-700"
								}`}
								onClick={() => setPage(idx + 1)}
							>
								{idx + 1}
							</button>
						))}
						<button
							className="px-3 py-1 text-gray-700 bg-gray-200 rounded disabled:opacity-50"
							onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
							disabled={page === totalPages}
						>
							Next
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchFilterSection;
