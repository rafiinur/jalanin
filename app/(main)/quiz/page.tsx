"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const pertanyaan = [
	{
		id: 1,
		teks: "Apa yang kamu suka lakukan di waktu luang?",
		pilihan: [
			{
				label: "Petualangan Ekstrem",
				deskripsi: "Hiking, Climbing, atau olahraga menantang",
			},
			{
				label: "Santai dan Rileks",
				deskripsi: "Baca buku, denger musik, atau berjemur",
			},
			{
				label: "Eksplorasi Budaya",
				deskripsi: "Museum, situs sejarah, atau pasar tradisional",
			},
		],
	},
	{
		id: 2,
		teks: "Kalau lagi liburan, kamu paling excited buat...",
		pilihan: [
			{ label: "Eksplor Kota", deskripsi: "Main ke mall, taman kota" },
			{
				label: "Momen kocak bareng temen",
				deskripsi: "Ngakak, bikin vlog iseng, atau foto-foto konyol",
			},
			{ label: "Nikmatin alam", deskripsi: "Pegunungan, pantai, danau" },
		],
	},
	{
		id: 3,
		teks: "Kalau dikasih cuti seminggu, kamu bakal...",
		pilihan: [
			{
				label: "Main aktif ramean",
				deskripsi:
					"Singapura, Malang, Kuala Lumpur - banyak tempat buat bareng-bareng",
			},
			{
				label: "Eksplor Pantai & Laut",
				deskripsi: "Bali, Labuan Bajo, Phuket - buat main air & chill",
			},
			{
				label: "City Trip Seru",
				deskripsi: "Jogja, Tokyo, Jakarta, - padat tapi fun",
			},
		],
	},
	{
		id: 4,
		teks: "Hal apa yang paling bikin kamu happy saat traveling?",
		pilihan: [
			{
				label: "Coba makanan lokal unik",
				deskripsi: "Kulineran, street food, atau resto viral",
			},
			{
				label: "Lihat sunset & pemandangan alam",
				deskripsi: "Pantai, gunung, danau, atau taman kota",
			},
			{
				label: "Seru-seruan bareng teman",
				deskripsi: "Games, karaoke, atau aktivitas ramean",
			},
		],
	},
	{
		id: 5,
		teks: "Apa yang paling sering kamu post di Instagram pas liburan?",
		pilihan: [
			{
				label: "Bangunan unik atau makanan lokal",
				deskripsi: "Spot unik, kuliner lokal, hidden gem",
			},
			{
				label: "Sunset, pantai, dan vibe alam",
				deskripsi: "View sunset, pantai, pegunungan, danau",
			},
			{
				label: "Foto ramean dan video lucu",
				deskripsi: "Keseruan bareng teman, video kocak",
			},
		],
	},
];

// Contoh data paket rekomendasi
const rekomendasi = [
	{
		nama: "7 Days Bali Epic Experience",
		img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
		hari: 7,
		group: "4 - 10 Group",
		guided: "Full Guided",
		harga: 12901750,
		rating: 4.8,
		destinasi: "Bali, Ubud, Kintamani, Uluwatu",
	},
	{
		nama: "5 Days Lombok Chill Vibes",
		img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop",
		hari: 5,
		group: "4 - 10 Group",
		guided: "Full Guided",
		harga: 8300000,
		rating: 4.7,
		destinasi: "Lombok, Gili Trawangan",
	},
	{
		nama: "6 Days Labuan Bajo Sailing",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=600&auto=format&fit=crop",
		hari: 6,
		group: "4 - 10 Group",
		guided: "Full Guided",
		harga: 11200000,
		rating: 4.9,
		destinasi: "Labuan Bajo, Pulau Komodo",
	},
];

export default function QuizPage() {
	const [step, setStep] = useState(0);
	const [jawaban, setJawaban] = useState<string | null>(null);
	const [jawabanAkhir, setJawabanAkhir] = useState<string[]>([]);
	const [showResult, setShowResult] = useState(false);
	const [paketRekom, setPaketRekom] = useState<typeof rekomendasi>([]);
	const total = pertanyaan.length;

	const handleNext = () => {
		if (jawaban) {
			const nextJawaban = [...jawabanAkhir];
			nextJawaban[step] = jawaban;
			setJawabanAkhir(nextJawaban);
			setJawaban(null);
			if (step < total - 1) {
				setStep(step + 1);
			}
		}
	};

	const handlePrev = () => {
		if (step > 0) {
			setStep(step - 1);
			setJawaban(jawabanAkhir[step - 1] || null);
		}
	};

	// Fungsi rekomendasi lebih variatif, output selalu 3 paket
	function getRekomendasi(jawabanAkhir: string[]) {
		const skor: Record<string, number> = {
			bali: 0,
			lombok: 0,
			labuanbajo: 0,
		};

		const paketMap: Record<string, (typeof rekomendasi)[0]> = {
			bali: rekomendasi[0],
			lombok: rekomendasi[1],
			labuanbajo: rekomendasi[2],
		};

		jawabanAkhir.forEach((jwb) => {
			if (
				jwb === "Eksplor Pantai & Laut" ||
				jwb === "Sunset, pantai, dan vibe alam"
			) {
				skor.bali += 3;
				skor.labuanbajo += 1;
			}
			if (jwb === "Santai dan Rileks" || jwb === "Eksplorasi Budaya") {
				skor.lombok += 3;
				skor.bali += 1;
			}
			if (jwb === "Main aktif ramean" || jwb === "Seru-seruan bareng teman") {
				skor.labuanbajo += 3;
				skor.lombok += 1;
			}
			if (jwb === "City Trip Seru" || jwb === "Eksplor Kota") {
				skor.lombok += 2;
				skor.labuanbajo += 1;
			}
			if (jwb === "Bangunan unik atau makanan lokal") {
				skor.lombok += 2;
				skor.bali += 1;
			}
			if (jwb === "Foto ramean dan video lucu") {
				skor.labuanbajo += 2;
				skor.bali += 1;
			}
			if (jwb === "Lihat sunset & pemandangan alam") {
				skor.bali += 2;
				skor.labuanbajo += 2;
			}
		});

		// Urutkan dan acak jika skor sama
		let arr = Object.entries(skor).map(([key, skor]) => ({
			...paketMap[key],
			key,
			skor,
		}));
		arr = arr.sort((a, b) => b.skor - a.skor);
		for (let i = 0; i < arr.length; ) {
			const same = arr.filter((p) => p.skor === arr[i].skor);
			if (same.length > 1) {
				const shuffled = [...same].sort(() => Math.random() - 0.5);
				arr.splice(i, same.length, ...shuffled);
				i += same.length;
			} else {
				i++;
			}
		}
		return arr.slice(0, 3);
	}

	const handleCek = () => {
		const hasil = getRekomendasi(jawabanAkhir.concat(jawaban || ""));
		setPaketRekom(hasil);
		setShowResult(true);
	};

	return (
		<main className="min-h-screen bg-gradient-to-br from-[#FFF1E7] via-[#FFF6EE] to-[#FFE3CC] flex flex-col items-center py-10 px-2 md:px-4">
			<div className="w-full max-w-4xl space-y-8">
				{/* Header */}
				{!showResult && (
					<div className="relative bg-gradient-to-r from-[#FFB877] to-[#FF914D] p-8 rounded-3xl text-center shadow-lg overflow-hidden">
						<div className="absolute -top-8 -left-8 w-32 h-32 bg-[#fff6ee] opacity-30 rounded-full blur-2xl"></div>
						<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#fff6ee] opacity-30 rounded-full blur-2xl"></div>
						<h2 className="mb-2 text-2xl font-extrabold tracking-tight text-white md:text-3xl drop-shadow-lg">
							Cocoknya liburan kemana nih?
						</h2>
						<p className="text-base font-medium md:text-lg text-white/90">
							Jawab 5 pertanyaan seru ini, dan temukan destinasi impian yang pas
							banget sama kepribadianmu!
						</p>
					</div>
				)}
				{/* Quiz Card */}
				<div className="bg-white/90 p-6 md:p-10 rounded-3xl shadow-xl border border-[#FFB877] backdrop-blur-sm">
					{!showResult ? (
						<>
							{/* Progress */}
							<div className="flex items-center gap-3 mb-8">
								<div className="flex-1 h-2 bg-[#FFE3CC] rounded-full overflow-hidden">
									<div
										className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-[#FFB877] to-[#FF914D] shadow-lg"
										style={{
											width: `${
												step === 0 && !jawaban
													? 0
													: ((step + (jawaban ? 1 : 0)) / total) * 100
											}%`,
										}}
									></div>
								</div>
								<span className="text-xs font-bold text-[#FF914D] drop-shadow">
									{step === 0 && !jawaban ? 0 : step + 1}/{total}
								</span>
							</div>

							{/* Pertanyaan */}
							<h3 className="text-xl md:text-2xl font-bold mb-8 text-[#FF914D] tracking-tight text-center">
								{pertanyaan[step].teks}
							</h3>

							{/* Pilihan */}
							<div className="space-y-5">
								{pertanyaan[step].pilihan.map((pil, i) => (
									<button
										key={i}
										onClick={() => setJawaban(pil.label)}
										className={`w-full text-left p-5 rounded-2xl border flex items-center gap-4 transition-all duration-150 shadow group
                      ${
												jawaban === pil.label
													? "bg-gradient-to-r from-[#FFB877] to-[#FF914D] border-[#FF914D] text-white scale-[1.03] shadow-lg"
													: "bg-white border-[#FFB877] hover:bg-[#FFF6EE] text-[#FF914D]"
											}`}
									>
										<span
											className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl font-bold shadow
                      ${
												jawaban === pil.label
													? "bg-white/30 text-white"
													: "bg-[#FFB877] text-[#FF914D]"
											}`}
										>
											<svg
												width="32"
												height="32"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													cx="12"
													cy="12"
													r="12"
													fill={jawaban === pil.label ? "#FF914D" : "#FFB877"}
												/>
												<text
													x="12"
													y="17"
													textAnchor="middle"
													fontSize="16"
													fill={jawaban === pil.label ? "#fff" : "#FF914D"}
													fontWeight="bold"
												>
													😊
												</text>
											</svg>
										</span>
										<span>
											<p
												className={`font-semibold text-lg ${
													jawaban === pil.label
														? "text-white"
														: "text-[#FF914D]"
												}`}
											>
												{pil.label}
											</p>
											<p
												className={`text-sm ${
													jawaban === pil.label
														? "text-white/80"
														: "text-gray-500"
												}`}
											>
												{pil.deskripsi}
											</p>
										</span>
									</button>
								))}
							</div>

							{/* Tombol Navigasi */}
							<div className="flex justify-between mt-10">
								<button
									onClick={handlePrev}
									disabled={step === 0}
									className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-150 border shadow
                    ${
											step === 0
												? "bg-[#FFB877] text-white opacity-60 cursor-not-allowed border-[#FFB877]"
												: "bg-white text-[#FF914D] border-[#FFB877] hover:bg-[#FFB877] hover:text-white"
										}`}
								>
									Sebelumnya
								</button>
								{step < total - 1 ? (
									<button
										onClick={handleNext}
										disabled={!jawaban}
										className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-150 border shadow
                      ${
												jawaban
													? "bg-gradient-to-r from-[#FFB877] to-[#FF914D] text-white border-[#FF914D] hover:scale-105"
													: "bg-[#FFB877] text-white opacity-60 cursor-not-allowed border-[#FFB877]"
											}`}
									>
										Selanjutnya
									</button>
								) : (
									<button
										onClick={handleCek}
										disabled={!jawaban}
										className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-150 border shadow
                      ${
												jawaban
													? "bg-gradient-to-r from-[#FFB877] to-[#FF914D] text-white border-[#FF914D] hover:scale-105"
													: "bg-[#FFB877] text-white opacity-60 cursor-not-allowed border-[#FFB877]"
											}`}
									>
										Cek Hasil
									</button>
								)}
							</div>
						</>
					) : (
						<section>
							<h2 className="text-center text-2xl md:text-3xl font-extrabold mb-8 text-[#222] tracking-tight">
								<span className="inline-block animate-bounce">🎉</span> Ini
								rekomendasi paket liburan yang paling pas buat kamu!
							</h2>
							<div className="flex flex-col md:flex-row justify-center gap-8 bg-[#FFF6EE] p-8 rounded-2xl border border-[#FFB877] shadow-inner">
								{paketRekom.map((paket, idx) => (
									<div
										key={idx}
										className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-80 flex flex-col items-center border border-[#FFB877]/40 relative"
									>
										<Image
											src={paket.img}
											alt={paket.nama}
											width={320}
											height={200}
											className="rounded-xl w-full h-40 object-cover border-2 border-[#FFB877]/40 mb-4"
										/>
										{idx === 0 && (
											<span className="absolute top-2 left-2 bg-[#22C55E] text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
												Cocok Banget!
											</span>
										)}
										{idx === 1 && (
											<span className="absolute top-2 left-2 bg-[#FFB877] text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
												Recommended
											</span>
										)}
										{idx === 2 && (
											<span className="absolute top-2 left-2 bg-[#FF914D] text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
												Bisa Dicoba
											</span>
										)}
										<div className="font-bold text-base text-[#222] mb-1 text-center">
											{paket.nama}
										</div>
										<div className="mb-2 text-xs text-center text-gray-500">
											{paket.destinasi}
										</div>
										<ul className="text-xs text-[#FF914D] mb-2 space-y-1 text-left w-full">
											<li>🗓️ {paket.hari} Days</li>
											<li>👥 {paket.group}</li>
											<li>🧑‍💼 {paket.guided}</li>
										</ul>
										<div className="flex items-center justify-between w-full mt-2">
											<span className="text-[#22C55E] font-bold text-lg">
												Rp{paket.harga.toLocaleString("id-ID")}
											</span>
											<span className="text-xs text-gray-400">/orang</span>
										</div>
										<div className="flex items-center gap-1 mt-2 text-[#FF914D] font-semibold">
											<span>★</span>
											<span>{paket.rating}</span>
										</div>
									</div>
								))}
							</div>
							<div className="flex flex-col justify-end gap-4 mt-10 md:flex-row">
								<Link href={"/quiz"} className="w-full md:w-auto">
									<Button
										onClick={() => {
											setShowResult(false);
											setStep(0);
											setJawaban(null);
											setJawabanAkhir([]);
										}}
										className="px-6 py-2 rounded-full bg-white border border-[#FFB877] text-[#FF914D] font-bold shadow hover:bg-[#FFF6EE] transition-all"
									>
										Back to Quiz
									</Button>
								</Link>
								<Link href="/paket" className="w-full md:w-auto">
									<Button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FFB877] to-[#FF914D] text-white font-bold shadow hover:scale-105 transition-all">
										CUSTOM PACKAGE
									</Button>
								</Link>
							</div>
						</section>
					)}
				</div>
			</div>
		</main>
	);
}
