import Head from "next/head";
import Image from "next/image";
import React from "react";
import SearchBar from "@/components/search-bar";
import SearchFilterSection from "@/components/sections/search-filter";
import Link from "next/link";

const PaketKotaPage = () => {
  return (
    <>
      <Head>
        <title>Paket Tour Kota Ubud</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-slate-50">
        <div className="container px-4 py-8 mx-auto">
          {/* Hero Section */}
          <div className="relative w-full mb-8 overflow-hidden h-96 rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ubud Rice Terraces"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center bg-black bg-opacity-50">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Paket Tour Kota Ubud
              </h1>
              <p className="max-w-2xl text-lg text-white md:text-xl">
                Gunakan fitur custom dan filter untuk hasil yang lebih personal
              </p>
            </div>
          </div>

          {/* Search Bar Component */}
          <div className="mb-12">
            <SearchBar />
          </div>

          {/* Konten Utama: Filter dan Hasil */}
          <SearchFilterSection />
        </div>

        {/* Custom Package CTA Section */}
        <section className="relative py-20 mt-12">
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"
            alt="Ubud Nature Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 z-10 bg-black bg-opacity-30"></div>
          <div className="container relative z-20 px-4 mx-auto">
            <div className="max-w-2xl p-8 mx-auto text-center shadow-lg bg-amber-50 rounded-2xl md:p-12">
              <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-orange-800 bg-orange-200 rounded-full">
                <span className="text-sm font-semibold">Fitur unggulan</span>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Gak nemu paket yang cocok? Yuk kita custom!
              </h3>
              <p className="mb-8 text-gray-600">
                Setiap orang punya gaya liburan yang unik—makanya, lewat fitur
                Custom Package, kamu bisa atur sendiri destinasi, durasi, dan
                aktivitas sesuai keinginanmu! Kami bantu rancang perjalanan yang
                personal dan bebas ribet, biar liburan kamu jadi lebih berkesan
                dan #KamuBanget.
              </p>
              <a
                href="#"
                className="inline-block px-10 py-3 font-bold text-blue-800 transition-colors bg-blue-200 rounded-lg hover:bg-blue-300"
              >
                Buat sekarang!
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PaketKotaPage;
