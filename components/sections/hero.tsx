"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container mx-auto h-screen">
      <div className="h-full flex items-center justify-between">
        <div className="flex flex-col">
          <div className="max-w-3xl mb-24">
            <h2 className="text-5xl font-bold text-primary-600 mb-6">
              Jalanin - Liburan Terencana, Bukan Sekadar Wacana
            </h2>
            <p className="text-lg">
              Satu klik, satu tim, satu tujuan — rencanain liburan , ujungnya
              nggak jadi? Nggak lagi, Jalanin solusinya!
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Cari destinasi impianmu..."
              className="border-primary-400"
            />
            <Button type="submit" className="bg-primary-600">
              Mulai Perjalanan
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image src="/hero.svg" alt="hero-svg" width={500} height={500} />
          <Image
            src="/hero-decor-1.svg"
            alt="hero-decor"
            width={500}
            height={500}
            className="absolute top-0 -right-17 -z-50 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
