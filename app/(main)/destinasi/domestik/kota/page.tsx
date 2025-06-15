import Head from "next/head";
import Image from "next/image";
import React from "react";
import SearchBar from "@/components/search-bar";
import SearchFilterSection from "@/components/sections/search-filter";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ubud Rice Terraces"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 z-10">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                Paket Tour Kota Ubud
              </h1>
              <p className="text-white text-lg md:text-xl max-w-2xl">
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
          <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
          <div className="relative container mx-auto px-4 z-20">
            <div className="max-w-2xl mx-auto bg-amber-50 rounded-2xl p-8 md:p-12 text-center shadow-lg">
              <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-800 rounded-full px-4 py-1 mb-6">
                <span className="font-semibold text-sm">Fitur unggulan</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Gak nemu paket yang cocok? Yuk kita custom!
              </h3>
              <p className="text-gray-600 mb-8">
                Setiap orang punya gaya liburan yang unik—makanya, lewat fitur
                Custom Package, kamu bisa atur sendiri destinasi, durasi, dan
                aktivitas sesuai keinginanmu! Kami bantu rancang perjalanan yang
                personal dan bebas ribet, biar liburan kamu jadi lebih berkesan
                dan #KamuBanget.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-200 text-blue-800 font-bold py-3 px-10 rounded-lg hover:bg-blue-300 transition-colors"
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
