import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, MapPin, X } from "lucide-react";
import Link from "next/link";

export interface PackageCardProps {
  image: string;
  title: string;
  href?: string;
  tag?: string;
  duration?: string;
  group?: string;
  guide?: string;
  destinations?: string;
  petAllowed?: boolean;
  price: string;
  priceNote?: string;
}

const PackageCard = ({
  image,
  title,
  href = "#",
  tag,
  duration,
  group,
  guide,
  destinations,
  petAllowed = false,
  price,
  priceNote = "per person",
}: PackageCardProps) => {
  return (
    <Card className="w-full p-0 border shadow-sm border-neutral-200">
      <CardContent className="p-0">
        <div className="flex flex-col gap-6 p-5 md:flex-row">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-full h-48 md:w-72 md:h-auto aspect-video">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-start justify-between gap-2 mb-3">
              <Link
                href={href}
                className="text-xl font-semibold leading-snug text-gray-900"
              >
                {title}
              </Link>
              {tag && (
                <span className="px-3 py-1 text-sm font-medium text-white bg-orange-400 rounded-full whitespace-nowrap">
                  {tag}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-3 text-gray-600">
              {duration && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  {duration}
                </div>
              )}
              {group && (
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4" />
                  {group}
                </div>
              )}
              {guide && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  {guide}
                </div>
              )}
            </div>

            {destinations && (
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-700">
                  Destinations:{" "}
                </span>
                <span className="text-sm text-blue-600">
                  {destinations}
                </span>
              </div>
            )}

            <div className="flex items-end justify-between mt-auto">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <X
                  className={`w-4 h-4 ${
                    petAllowed ? "text-green-500" : "text-orange-500"
                  }`}
                />
                {petAllowed ? "Pet allowed" : "No pet"}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{price}</div>
                <div className="text-sm text-gray-500">{priceNote}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
