import Head from "next/head";
import React from "react";
import Image from "next/image";
import SearchBar from "@/components/search-bar";
import SearchFilterSection from "@/components/sections/search-filter";

// Komponen Halaman Utama
const PaketProvinsiPage = () => {
  return (
    <>
      <Head>
        <title>Paket Tour Provinsi Bali</title>
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

      <main className="bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bali Hero Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                Paket Tour Provinsi Bali
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

          {/* Recommended Cities Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Rekomendasi Kota di Bali
            </h2>
            <p className="text-gray-600 mb-6">
              Temukan suasana unik dari setiap kota di Bali—mulai dari
              ketenangan Ubud hingga semaraknya Kuta.
            </p>

            <div className="flex flex-col md:flex-row gap-4 h-[400px]">
              <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
                {/* Ubud */}
                <div className="relative rounded-lg overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1573910393273-e7a177d1a21f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Ubud"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Ubud</h3>
                  </div>
                </div>
                {/* Denpasar */}
                <div className="relative rounded-lg overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1558004939-2977e1d51a3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Denpasar"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Denpasar</h3>
                  </div>
                </div>
                {/* Seminyak */}
                <div className="relative rounded-lg overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1592354189221-99b0680e513a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Seminyak"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Seminyak</h3>
                  </div>
                </div>
                {/* Canggu */}
                <div className="relative rounded-lg overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1547385481-809d43594063?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Canggu"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Canggu</h3>
                  </div>
                </div>
              </div>
              {/* Kuta */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-lg overflow-hidden h-full group">
                  <Image
                    src="https://images.unsplash.com/photo-1537953773345-d172ccfa1380?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Kuta"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Kuta</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Filter and Results Section Component */}
        <section className="container mx-auto px-4 py-8">
          <SearchFilterSection />
        </section>

        {/* Custom Package CTA Section */}
        <section className="relative py-20 mt-16">
          <Image
            src="https://images.unsplash.com/photo-1533106418989-88901b050726?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Custom Package Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative container mx-auto px-4">
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

export default PaketProvinsiPage;
