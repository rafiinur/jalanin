import React from "react";
import { Card, CardContent } from "./ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const SearchBar = () => {
  return (
    <Card className="w-full rounded-2xl border-neutral-200 shadow-lg px-5 py-4">
      <CardContent>
        <div className="flex items-center justify-around">
          {/* Location Field */}
          <div className="flex flex-col flex-1 max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-gray-700">Destinasi</span>
            </div>
            <Input
              placeholder="Cari destinasi wisata"
              className="border-0 p-0 text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Separator orientation="vertical" className="h-10 mx-4" />

          <div className="w-4 h-full bg-primary"></div>
          {/* Duration Field */}
          <div className="flex flex-col flex-1 max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="text-gray-700">Durasi</span>
            </div>
            <Input
              placeholder="Pilih durasi"
              className="border-0 p-0 text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
            />
          </div>
          <Separator orientation="vertical" className="h-10 mx-4" />

          {/* Category Field */}
          <div className="flex flex-col flex-1 max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span className="text-gray-700">Kategori</span>
            </div>
            <Input
              placeholder="Pilih kategori"
              className="border-0 p-0 text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
            />
          </div>
          {/* Search Button */}
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-14 py-3 rounded-2xl h-auto">
            Cari
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchBar;
