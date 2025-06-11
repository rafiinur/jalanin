import { Button } from "@/components/ui/button";
import Link from "next/link";
import DestinationCard from "../destination-card";

const DestinationSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Temukan Pengalaman Perjalanan Terbaik
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Jelajahi berbagai destinasi dan pengalaman menarik di seluruh
          Indonesia dan dunia.
        </p>
      </div>

      {/* Grid Card */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <DestinationCard key={i} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Link href="/destinations" className="inline-block">
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

export default DestinationSection;
