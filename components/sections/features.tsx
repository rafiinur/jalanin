import React from "react";
import { Users, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Travel Group",
      description:
        "Liburan nggak lagi sendiri. Ayo atur destinasi, dan lihat semua rencana dalam satu tampilan.",
    },
    {
      icon: MapPin,
      title: "Destination Planning",
      description:
        "Temukan destinasi impian dan rencanakan perjalanan dengan mudah bersama teman-teman.",
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description:
        "Koordinasi jadwal semua anggota grup dan pastikan semua siap berangkat tepat waktu.",
    },
  ];

  return (
    <section className="container mx-auto my-16">
      <div
        className="relative overflow-hidden rounded-3xl shadow-2xl"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 50%, var(--color-primary-700) 100%)",
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full"
            style={{ backgroundColor: "var(--color-primary-300)" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full"
            style={{ backgroundColor: "var(--color-primary-800)" }}
          ></div>
        </div>

        <div className="relative flex flex-col text-center px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20">
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Fitur Utama
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed"
              style={{ color: "var(--color-primary-100)" }}
            >
              Mulai dari nyari tempat, atur jadwal, sampe semua kompak berangkat
              – semua bisa di{" "}
              <span className="font-bold text-white drop-shadow-sm">
                Jalanin
              </span>
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative bg-white/95 backdrop-blur-md border-0 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="relative flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10">
                  {/* Icon Container */}
                  <div className="relative mb-6 sm:mb-8">
                    <div
                      className="relative p-4 sm:p-5 lg:p-6 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, var(--color-primary-200) 0%, var(--color-primary-300) 100%)`,
                      }}
                    >
                      <feature.icon
                        size={28}
                        className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-colors duration-300"
                        style={{ color: "var(--color-primary-700)" }}
                      />
                    </div>

                    {/* Animated ring */}
                    <div
                      className="absolute inset-0 rounded-2xl border-2 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"
                      style={{ borderColor: "var(--color-primary-400)" }}
                    ></div>

                    {/* Pulse effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-1000"
                      style={{ backgroundColor: "var(--color-primary-300)" }}
                    ></div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-center transition-colors duration-300"
                    style={{ color: "var(--color-secondary-900)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base lg:text-lg leading-relaxed text-center transition-colors duration-300"
                    style={{ color: "var(--color-secondary-700)" }}
                  >
                    {feature.description}
                  </p>
                </CardContent>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: "var(--color-primary-500)" }}
                ></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
