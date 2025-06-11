import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = () => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden rounded-t-2xl aspect-video">
          <Image
            src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Pantai Kuta dan Ubud, Bali"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-medium px-2 py-1">
            Populer
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 px-5">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Bali, Indonesia</span>
        </div>

        <Link
          href="#"
          className="block text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
        >
          Pesona Pantai Kuta & Ubud
        </Link>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Nikmati keindahan pantai, budaya yang kaya, dan pengalaman tak
          terlupakan di Bali.
        </p>

        <div>
          <span className="text-lg font-semibold text-foreground">
            Rp 2.000.000
          </span>
          <span className="text-sm text-muted-foreground ml-1">/orang</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
