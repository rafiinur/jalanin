import { Button } from "@/components/ui/button";
import Link from "next/link";
import DestinationCard from "../destination-card";

const Destination = () => {
  return (
    <section className="container mx-auto my-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-primary-600 mb-2">
          Temukan Pengalaman Perjalanan Terbaik
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Jelajahi berbagai destinasi dan pengalaman menarik di seluruh
          Indonesia dan dunia
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>

      {/* Load More Button */}
      <div className="text-center">
        <Link href={"/destinations"} className="inline-block">
          <Button
            variant="default"
            size="lg"
            className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
          >
            Lihat Selengkapnya
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Destination;
