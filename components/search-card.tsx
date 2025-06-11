import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, MapPin, X } from "lucide-react";
import Link from "next/link";

const SearchCard = () => {
  return (
    <Card className="border border-neutral-200 shadow-sm p-0 w-full">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row gap-6 p-5">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-full md:w-72 h-48 md:h-auto aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bali Epic Experience"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-start justify-between gap-2 mb-3">
              <Link
                href="#"
                className="text-xl font-semibold text-gray-900 leading-snug"
              >
                7 Days Bali Epic Experience
              </Link>
              <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                Hidden gems
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-3 text-gray-600">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />7 days
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4" />
                4-10 Group
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                Fully guided
              </div>
            </div>

            <div className="mb-3">
              <span className="text-sm font-medium text-gray-700">
                Destinations:{" "}
              </span>
              <span className="text-sm text-blue-600">
                Denpasar, Ubud, Kintamani, Uluwatu, Gili Trawangan
              </span>
            </div>

            <div className="flex justify-between items-end mt-auto">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <X className="w-4 h-4 text-orange-500" />
                No pet
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  Rp.12.901.750
                </div>
                <div className="text-sm text-gray-500">per person</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
