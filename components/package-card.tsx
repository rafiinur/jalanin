import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, MapPin, X } from "lucide-react";
import Link from "next/link";

const PackageCard = () => {
  return (
    <Card className="border-neutral-200 shadow-md p-0 max-w-4xl">
      <CardContent className="p-0">
        <div className="flex items-start gap-6 p-5">
          {/* Image Section */}
          <div className="relative flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bali Epic Experience"
              width={285}
              height={200}
              className="w-72 h-48 object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-grow">
            {/* Header with Title and Badge */}
            <div className="flex items-start justify-between mb-4">
              <Link
                href="#"
                className="text-xl font-semibold text-gray-900 leading-tight"
              >
                7 Days Bali Epic Experience
              </Link>
              <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-4">
                Hidden gems
              </span>
            </div>

            {/* Trip Details */}
            <div className="flex items-center gap-6 mb-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">4-10 Group</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Fully guided</span>
              </div>
            </div>

            {/* Destinations */}
            <div className="mb-4">
              <span className="text-sm text-gray-700 font-medium">
                Destinations:{" "}
              </span>
              <span className="text-sm text-blue-600">
                Denpasar, Ubud, Kintamani, Uluwatu, Gili Trawangan
              </span>
            </div>

            {/* Bottom Section */}
            <div className="flex items-end justify-between">
              {/* No Pet Icon */}
              <div className="flex items-center gap-2 text-gray-500">
                <X className="w-4 h-4 text-orange-500" />
                <span className="text-sm">No pet</span>
              </div>

              {/* Price */}
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

export default PackageCard;
