import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Decorative Background - always stuck to the right */}
      <Image
        src="/hero-decor-1.svg"
        alt="Dekorasi Hero"
        width={800}
        height={800}
        className="absolute top-0 right-0 w-auto h-full object-cover pointer-events-none select-none z-0"
      />

      {/* Content */}
      <div className="relative container mx-auto h-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 h-full">
          {/* Left Side */}
          <div className="flex flex-col text-center md:text-left items-center md:items-start">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-6">
                Jalanin - Liburan Terencana, Bukan Sekadar Wacana
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Satu klik, satu tim, satu tujuan — rencanain liburan, ujungnya
                nggak jadi? Nggak lagi, Jalanin solusinya!
              </p>
            </div>

            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Cari destinasi impianmu..."
                className="border-primary-400"
              />
              <Button
                type="submit"
                className="bg-primary-600 whitespace-nowrap"
              >
                Mulai Perjalanan
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full max-w-lg">
            <Image
              src="/hero.svg"
              alt="Ilustrasi Hero"
              width={500}
              height={500}
              className="sm:w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
