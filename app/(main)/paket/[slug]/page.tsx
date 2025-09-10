"use client";

import { ChevronLeft, Calendar, Users, Plus, Minus, Heart } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PackageDetails = () => {
  const [guests, setGuests] = useState(1);

  return (
    <div className="container min-h-screen mx-auto">
      {/* Back Button */}
      <div className="flex items-center gap-2 mb-6 text-gray-600 transition-colors cursor-pointer hover:text-gray-800">
        <ChevronLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </div>

      {/* Main Image Container */}
      <div className="relative mb-56 shadow-2xl rounded-2xl">
        <Image
          width={1470}
          height={500}
          src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bali Epic Experience"
          className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
        />

        {/* Overlay Content */}
        <div className="absolute w-full -bottom-1/3">
          {/* Bottom Content Card */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="p-6 shadow-lg bg-white/95 backdrop-blur-sm rounded-2xl">
              {/* Tags */}
              <div className="flex gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  Water Activities
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                  <Users size={14} />
                  5-10 Group
                </div>
              </div>

              {/* Title */}
              <h1 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                7 Days Bali Epic Experience
              </h1>

              {/* Description */}
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
                Escape to Indonesias most captivating destinations with our
                all-in-one trip package: Denpasar, Ubud, Kintamani, Uluwatu &
                Gili Trawangan. From the cultural heart of Bali to the pristine
                shores of the Gili islands, this unforgettable journey blends
                relaxation, adventure, and authentic Balinese charm.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Content - Tabs */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="informasi" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger
                value="informasi"
                className="data-[state=active]:bg-orange-400 data-[state=active]:text-white"
              >
                Informasi Umum
              </TabsTrigger>
              <TabsTrigger
                value="perjalanan"
                className="data-[state=active]:bg-orange-400 data-[state=active]:text-white"
              >
                Rencana Perjalanan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="informasi" className="space-y-6">
              {/* Description */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  Description
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Our Bali and Gili islands experience of 7 Days and 6 Nights is
                  the best package if you like to do an island hopping to the
                  most beautiful island of Indonesia. Start from Bali for 4 Days
                  and end in Gili Air for 3 Days that will cover various
                  highlights across the islands incredible sights, included:
                  Temples, Waterfalls, Ubud, Rice Terraces, Git Menyu,
                  Snorkeling with Turtles and Gili Trawangan included
                  accommodation, tour leader, transportation and much more.
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Highlight
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    Explore Balis ancient temples
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    Experience the beautiful Balis countryside and rice terraces
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    Enjoy delicious Indonesian cuisine and get to taste local
                    fruits
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    Snorkel with turtles and the famous underwater sculptures
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    Visit both Gili Air & Trawangan island
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    Party the night away on Gili islands
                  </li>
                </ul>
              </div>

              {/* Package Contents */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Apa yang termasuk dalam paket ini?
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-green-600 text-md">
                      ✓ Termasuk
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        6 malam akomodasi (hotel bintang 4)
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        Sarapan harian di hotel
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        Transport AC selama tour
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        Guide berbahasa Indonesia/Inggris
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        Tiket masuk semua tempat wisata
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        Fast boat ke Gili Trawangan
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        Peralatan snorkeling
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        Airport transfer
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-red-600 text-md">
                      ✗ Tidak Termasuk
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        Tiket pesawat internasional
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        Makan siang dan malam
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        Asuransi perjalanan
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        Tip untuk guide dan driver
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        Pengeluaran pribadi
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        Minuman beralkohol
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="perjalanan" className="space-y-6">
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  Pickup Point
                </h2>
                <p className="mb-6">
                  Temui pemandu Anda di Bandara Internasional Ngurah Rai (DPS),
                  Jalan Bandara Ngurah Rai, Badung, Bali 80361, Indonesia.
                  Sekitar pukul 00:00 - 13:00.
                </p>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  Rekomendasi Barang Bawaan
                </h2>
                <ul className="mb-6 text-sm text-gray-600 list-disc list-inside">
                  <li>Sunblock dan lotion anti nyamuk</li>
                  <li>Sepatu nyaman untuk berjalan</li>
                  <li>Kamera untuk mengabadikan momen</li>
                  <li>Uang tunai untuk pengeluaran pribadi</li>
                  <li>Obat-obatan pribadi jika diperlukan</li>
                  <li>Perlengkapan snorkeling (jika tidak disediakan)</li>
                </ul>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-orange-400 rounded-full">
                        01
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-gray-900">
                        Hari Ke-1: Penjemputan Di Bandara - Spa - Makan Malam
                        Selamat Datang Di Pantai
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Tiba Di Bali, Penjemputan Di Bandara, Check-In Hotel.
                        Pilot Bali Selama 2 Jam Di Reborn Spa. Malam Harinya,
                        Makan Malam Di Pantai Dengan Hidangan Laut Di Jimbaran.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-orange-400 rounded-full">
                        02
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-gray-900">
                        Hari Ke-2: Pantai Bali Selatan - Kolam Renang Infinity &
                        Pura Uluwatu
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Kunjungi Pantai Melasti, Nikmati Minuman Dan Pemandangan
                        Dari Kolam Renang Infinity Singla Fin, Lalu Kunjungi
                        Pura Uluwatu Untuk Menyaksikan Matahari Terbenam Dan
                        Pertunjukan Tari Kecak Api.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-orange-400 rounded-full">
                        03
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-gray-900">
                        Hari Ke-3: Jelajahi Air Terjun, Titik Pandang Gunung
                        Berapi, & Kuli Air Suci
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Kunjungi Air Terjun Tegenungan, Lanjutkan Perjalanan Ke
                        Kintamani Untuk Melihat Pemandangan Gunung Berapi Dan
                        Makan Siang, Mencicipi Kopi, Lalu Jelajahi Pura Air Suci
                        Tirta Empul. Bermalam Di Ubud.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-orange-400 rounded-full">
                        04
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-gray-900">
                        Hari Ke-4: Tur Ubud - Sawah Berundak - Hutan Monyet
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Mengunjungi Sawah Terasering Tegallalang Dan Hutan
                        Monyet. Sore Hari Bebas Untuk Menjelajahi Kota Ubud Dan
                        Budaya Setempat.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-orange-400 rounded-full">
                        05
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-gray-900">
                        Hari Ke-5: Perjalanan Ke Gili Trawangan - Pantai &
                        Relaksasi
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Check-out dari hotel Ubud, perjalanan ke pelabuhan
                        Padang Bai, naik fast boat menuju Gili Trawangan.
                        Check-in hotel dan sore hari bebas menikmati pantai dan
                        sunset.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-orange-400 rounded-full">
                        06
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-gray-900">
                        Hari Ke-6: Snorkeling Adventure - 3 Gili Islands Hopping
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Island hopping ke 3 Gili (Trawangan, Meno, Air) dengan
                        aktivitas snorkeling. Melihat underwater statues,
                        berenang bersama penyu laut, dan menikmati keindahan
                        bawah laut.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-orange-400 rounded-full">
                        07
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-gray-900">
                        Hari Ke-7: Kembali Ke Bali - Transfer Airport
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Check-out dari hotel Gili Trawangan, naik fast boat
                        kembali ke Bali, transfer ke Bandara Ngurah Rai untuk
                        penerbangan pulang. Akhir dari petualangan 7 hari yang
                        tak terlupakan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Content - Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky p-6 bg-white shadow-lg rounded-2xl top-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Detail Pesanan
            </h3>

            {/* Duration */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Durasi wisata
              </label>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm text-gray-600">7 hari</span>
                <Calendar size={16} className="text-gray-400" />
              </div>
            </div>

            {/* Guests */}
            <div className="mb-6">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Jumlah pesanan
              </label>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm text-gray-600">{guests} orang</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="flex items-center justify-center w-6 h-6 border rounded-full hover:bg-gray-50"
                  >
                    <Minus size={12} />
                  </button>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="flex items-center justify-center w-6 h-6 border rounded-full hover:bg-gray-50"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Subtotal</span>
              </div>
              <div className="text-2xl font-bold text-orange-500">
                Rp.{(12901750 * guests).toLocaleString("id-ID")}
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Pesan sekarang
              </Button>
              <Button className="w-full" variant="outline">
                <Heart size={16} />
                Tambahkan ke wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
