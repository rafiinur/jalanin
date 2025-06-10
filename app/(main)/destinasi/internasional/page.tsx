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
      <div className="relative flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Decorative Images */}
        <Image
          src="/megamendung.svg"
          alt="megamendung"
          width={296}
          height={197}
          className="absolute top-4 left-4 object-cover w-20 h-auto rotate-180 sm:w-32 md:w-40 lg:w-48 xl:w-56 opacity-80"
        />
        <Image
          src="/megamendung.svg"
          alt="megamendung"
          width={296}
          height={197}
          className="absolute bottom-4 right-4 object-cover w-20 h-auto sm:w-32 md:w-40 lg:w-48 xl:w-56 opacity-80"
        />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Text Content */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-5xl font-semibold text-secondary mb-2 leading-tight">
              Destinasi Internasional
            </h2>
            <span className="text-2xl text-gray-600 max-w-4xl mx-auto block leading-relaxed">
              Pilihan Terbaik untuk Anda Menjelajahi Dunia
            </span>
          </div>

          {/* Main Image */}
          <div className="w-full max-w-6xl mx-auto">
            <Image
              src="/destinasi-1.svg"
              width={1360}
              height={644}
              alt="destinasi"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col my-20">
        <div className="relative py-28">
          <div className="absolute right-1/4 -z-20 size-80 bg-secondary rounded-full blur-[150px]"></div>
          <div className="mb-10 px-20">
            <h2 className="text-3xl font-semibold text-secondary mb-2">
              Rekomendasi Negara
            </h2>
            <p className="text-xl text-gray-600 text-balance max-w-2xl leading-9">
              Rasakan pesona destinasi dunia yang siap menghadirkan pengalaman
              tak terlupakan.
            </p>
          </div>

          <Carousel className="max-w-5xl">
            <CarouselContent className="py-4 px-20">
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
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary shadow-lg border-0" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary shadow-lg border-0" />
          </Carousel>

          <div className="absolute right-0 top-0 bottom-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1000&auto=format&fit=crop"
              width={396}
              height={500}
              alt="destinasi"
              className="w-96 h-[500px] object-cover rounded-t-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <SearchBar />
          <SearchFilterSection />
        </div>
      </div>
    </>
  );
};

export default InternationalDestinationPage;
