import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = () => {
  return (
    <Card className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden rounded-t-2xl">
          <Image
            src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bali destination - Kuta Beach and Ubud"
            width={500}
            height={500}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Tag at top left */}
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-medium px-2 py-1">
            Popular
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Bali, Indonesia</span>
          </div>

          <Link
            href="#"
            className="block text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200 leading-tight"
          >
            Pesona Pantai Kuta & Ubud
          </Link>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Nikmati keindahan pantai, budaya yang kaya, dan pengalaman tak
            terlupakan di Bali.
          </p>

          <div className="text-left">
            <span className="text-lg font-semibold text-foreground">
              Rp 2.000.000
            </span>
            <span className="text-sm text-muted-foreground ml-1">/person</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
