"use client";

import { ChevronLeft, Calendar, Users, Plus, Minus, Heart } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PackageDetails = () => {
  const [guests, setGuests] = useState(1);

  return (
    <div className="container mx-auto min-h-screen">
      {/* Back Button */}
      <div className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer hover:text-gray-800 transition-colors">
        <ChevronLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </div>

      {/* Main Image Container */}
      <div className="relative shadow-2xl mb-56 rounded-2xl">
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
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                7 Days Bali Epic Experience
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
                Escape to Indonesia's most captivating destinations with our
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Description
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our Bali and Gili islands experience of 7 Days and 6 Nights is
                  the best package if you like to do an island hopping to the
                  most beautiful island of Indonesia. Start from Bali for 4 Days
                  and end in Gili Air for 3 Days that will cover various
                  highlights across the island's incredible sights, included:
                  Temples, Waterfalls, Ubud, Rice Terraces, Git Menyu,
                  Snorkeling with Turtles and Gili Trawangan included
                  accommodation, tour leader, transportation and much more.
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Highlight
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    Explore Bali's ancient temples
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    Experience the beautiful Bali's countryside and rice
                    terraces
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
            </TabsContent>

            <TabsContent value="perjalanan">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Rencana Perjalanan
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hari 1: Tiba di Denpasar, transfer ke hotel. Hari 2:
                  Eksplorasi Ubud. Hari 3: Kintamani dan Gunung Batur. Hari 4:
                  Uluwatu dan Pantai Padang Padang. Hari 5: Perjalanan ke Gili
                  Trawangan. Hari 6: Snorkeling di Gili Trawangan. Hari 7:
                  Kembali ke Denpasar untuk penerbangan pulang.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Content - Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Detail Pesanan
            </h3>

            {/* Duration */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Durasi wisata
              </label>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm text-gray-600">7 hari</span>
                <Calendar size={16} className="text-gray-400" />
              </div>
            </div>

            {/* Guests */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jumlah pesanan
              </label>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm text-gray-600">{guests} orang</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus size={12} />
                  </button>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Subtotal</span>
              </div>
              <div className="text-2xl font-bold text-orange-500">
                Rp.12.901.750
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <Button className="w-full" variant={"default"}>
                Pesan sekarang
              </Button>
              <Button className="w-full" variant={"outline"}>
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
