"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    name: "Firda Umar",
    package: "Paket wisata Bali dan Gili 7 hari 6 malam",
    rating: 5,
    text: "Pelayanannya luar biasa, dari awal udah well prepare banget, transportasi, akomodasi, makanan, semuanya mantap! Liburan jadi lebih berkesan berkat Jalanin.",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    id: 2,
    name: "Ahmad Rizky",
    package: "Paket wisata Labuan Bajo 5 hari 4 malam",
    rating: 5,
    text: "Pengalaman yang sangat menyenangkan, guidenya ramah dan informatif, semua kegiatan teratur dengan baik, tidak ada kendala selama perjalanan.",
    avatar: "/path/to/avatar2.jpg",
  },
  {
    id: 3,
    name: "Siti Rahmawati",
    package: "Tour Yogyakarta 3 hari 2 malam",
    rating: 4,
    text: "Sangat senang bisa menikmati Yogyakarta dengan bantuan Jalanin, akomodasinya nyaman dan kunjungan ke tempat wisata sangat teratur. Akan merekomendasikan ke teman-teman!",
    avatar: "/path/to/avatar3.jpg",
  },
  {
    id: 4,
    name: "Budi Santoso",
    package: "Explore Lombok 4 hari 3 malam",
    rating: 5,
    text: "Tour guide sangat membantu dan fleksibel dengan permintaan kami. Pantai-pantai di Lombok yang kami kunjungi sangat indah dan tidak terlalu ramai dengan turis.",
    avatar: "/path/to/avatar4.jpg",
  },
  {
    id: 5,
    name: "Dina Putri",
    package: "Paket wisata Raja Ampat 6 hari 5 malam",
    rating: 5,
    text: "Pengalaman snorkeling di Raja Ampat tidak akan terlupakan. Tim Jalanin sangat profesional dan memastikan keselamatan kami sepanjang perjalanan.",
    avatar: "/path/to/avatar5.jpg",
  },
];

export default function TestimonialCarousel() {
  // Function to render rating stars
  const renderRating = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ));
  };

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 text-primary/10 -rotate-12">
        <Quote size={80} strokeWidth={1.5} className="fill-primary/5" />
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20 text-primary/10 rotate-180">
        <Quote size={80} strokeWidth={1.5} className="fill-primary/5" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Apa Kata Mereka</h2>
          <p className="text-muted-foreground">
            Pengalaman pelanggan yang telah menggunakan layanan Jalanin
          </p>
        </div>

        <div className="testimonial-carousel-wrapper">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            // Track slide changes if needed
            className="testimonial-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="py-10">
                {({ isActive }) => (
                  <div
                    className={`testimonial-card relative flex flex-col items-center px-6 py-8 rounded-2xl transition-all duration-300 ${
                      isActive ? "bg-primary/5 scale-105" : "bg-muted/30"
                    }`}
                  >
                    <div
                      className={`avatar relative mb-4 transition-all duration-300 ${
                        isActive ? "w-24 h-24" : "w-16 h-16"
                      }`}
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rounded-full object-cover border-4 border-primary"
                        width={isActive ? 96 : 64}
                        height={isActive ? 96 : 64}
                        unoptimized
                      />
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-2 py-1 shadow-md">
                          <div className="flex">
                            {renderRating(testimonial.rating)}
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={`text-center transition-all duration-300 ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-70"
                      }`}
                    >
                      <blockquote className="relative mb-4">
                        <p className="text-sm md:text-base italic">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                      </blockquote>

                      <div className="mt-4">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {testimonial.package}
                        </p>
                      </div>

                      {!isActive && (
                        <div className="mt-2 flex justify-center">
                          <div className="flex">
                            {renderRating(testimonial.rating)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .testimonial-swiper {
          width: 100%;
          padding: 50px 0;
        }

        .testimonial-swiper .swiper-pagination {
          position: relative;
          margin-top: 30px;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 0.5;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          background: var(--color-primary);
          opacity: 1;
          transform: scale(1.2);
        }

        .testimonial-card {
          height: 100%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(5px);
        }
      `}</style>
    </div>
  );
}
