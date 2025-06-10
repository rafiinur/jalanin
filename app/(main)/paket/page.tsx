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
    <div className="flex flex-col gap-8 container mx-auto min-h-screen">
      {/* Search Bar */}
      <div className="py-36 px-20">
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
          <div className="absolute top-1/3 left-8 text-white z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Paket Terpopuler
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Yuk cari paket yang paling cocok untuk liburan mu!
            </p>
          </div>
        </div>

        {/* Carousel using shadcn/ui Carousel */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-6xl">
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
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-0 shadow-lg p-0">
                    <CardContent className="p-1">
                      <Image
                        width={400}
                        height={200}
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-48 object-cover rounded-2xl"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-15 bg-white border-gray-200 hover:bg-gray-50 shadow-lg size-10 text-2xl" />
            <CarouselNext className="-right-15 bg-white border-gray-200 hover:bg-gray-50 shadow-lg size-10 text-2xl" />
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col items-center my-14">
        <h2 className="text-3xl font-bold text-secondary mb-5">
          Destinasi Internasional
        </h2>
        <span className="text-2xl text-secondary mb-20">
          Pilihan Terbaik untuk Anda Menjelajahi Dunia
        </span>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 auto-cols-min gap-14 mb-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={
                  "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="japan"
                width={400}
                height={400}
                className="w-auto h-[90px] aspect-square object-cover rounded-2xl mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Tokyo, Jepang
                </h3>
                <p className="text-gray-600">25 Paket Tersedia</p>
              </div>
            </div>
          ))}

          {/* Repeat for other destinations */}
        </div>
        <Link
          href="/destinasi/internasional"
          className="px-6 py-2.5 bg-secondary text-white rounded-2xl"
        >
          Lihat Lebih Banyak
        </Link>
      </div>

      <div className="flex flex-col items-center my-14">
        <h2 className="text-3xl font-bold text-primary mb-5">
          Destinasi Domestik Favorit
        </h2>
        <span className="text-2xl text-primary mb-20">
          Pilihan Terbaik untuk Menjelajahi Keindahan Tersembunyi di Seluruh
          Penjuru Nusantara
        </span>
        <div className="w-full h-[470px] bg-muted mb-16"></div>
        <div className="grid grid-cols-2 auto-cols-min mb-16">
          <div className="flex flex-col"></div>
          <div className="flex flex-col"></div>
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
