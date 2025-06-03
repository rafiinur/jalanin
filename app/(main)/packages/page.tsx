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
  return (
    <div className="flex flex-col gap-8 container mx-auto min-h-screen">
      {/* Search Bar */}
      <div className="py-36 px-20">
        <SearchBar />
      </div>

      <div className="relative mb-16">
        <Image
          src={
            "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="japan"
          width={1200}
          height={500}
          className="w-full h-[493px] object-cover rounded-2xl"
        />
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 max-w-6xl w-full">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <Card>
                    <CardContent></CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
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
          href="/destinasi/internasional"
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
