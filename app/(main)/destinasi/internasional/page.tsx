import SearchBar from "@/components/search-bar";
import SearchFilterSection from "@/components/sections/search-filter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const InternationalDestinationPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-white py-16 sm:py-20 lg:py-24 text-center overflow-hidden">
        {/* Ornamen Megamendung */}
        <Image
          src="/megamendung.svg"
          alt="megamendung"
          width={100}
          height={100}
          className="absolute top-8 left-8 w-20 sm:w-24 rotate-180 opacity-90"
        />
        <Image
          src="/megamendung.svg"
          alt="megamendung"
          width={100}
          height={100}
          className="absolute bottom-8 right-8 w-20 sm:w-24 opacity-90"
        />

        {/* Ornamen Awan (Opsional, bisa ditambahin komponen awan SVG) */}
        <div className="absolute inset-0 flex flex-wrap justify-around items-center pointer-events-none opacity-20">
          <div className="w-16 h-8 bg-gray-200 rounded-full" />
          <div className="w-24 h-10 bg-gray-100 rounded-full" />
          <div className="w-20 h-8 bg-gray-200 rounded-full" />
          {/* Tambah SVG awan custom kalau mau lebih estetik */}
        </div>

        {/* Konten Utama */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary mb-4">
            Destinasi Internasional 🌍
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10">
            Pilihan Terbaik untuk Anda Menjelajahi Dunia
          </p>

          <div className="mx-auto max-w-5xl">
            <Image
              src="/destinasi-1.svg"
              alt="destinasi internasional"
              width={1000}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col">
        <div className="relative mb-32">
          <div className="absolute right-1/4 -z-20 size-6  0 bg-secondary/80 rounded-full blur-[150px]"></div>
          <div className="px-20">
            <h2 className="text-3xl font-semibold text-secondary mb-2">
              Rekomendasi Negara
            </h2>
            <p className="text-xl text-gray-600 text-balance max-w-2xl leading-9">
              Rasakan pesona destinasi dunia yang siap menghadirkan pengalaman
              tak terlupakan.
            </p>
          </div>

          <Carousel className="max-w-5xl">
            <CarouselContent className="py-12 px-20">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1000&auto=format&fit=crop"
                  }
                  width={250}
                  height={250}
                  alt="Destinasi Internasional"
                  className="size-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl border-0"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1000&auto=format&fit=crop"
                  }
                  width={250}
                  height={250}
                  alt="Destinasi Internasional"
                  className="size-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl border-0"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1000&auto=format&fit=crop"
                  }
                  width={250}
                  height={250}
                  alt="Destinasi Internasional"
                  className="size-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl border-0"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-secondary shadow-lg border-0" />
            <CarouselNext className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-secondary shadow-lg border-0" />
          </Carousel>

          <div className="absolute right-0 top-0 bottom-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1000&auto=format&fit=crop"
              width={396}
              height={500}
              alt="destinasi"
              className="w-96 h-[500px] object-cover rounded-t-full rounded-b-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 mb-32">
          <SearchBar />
          <SearchFilterSection />
        </div>
      </div>
    </>
  );
};

export default InternationalDestinationPage;
