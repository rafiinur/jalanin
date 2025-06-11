import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import SearchCard from "../search-card";

const tripStyles = [
  "Water Activities",
  "Cultural Tours",
  "Adventure Trips",
  "Relaxation Retreats",
  "Wildlife Safaris",
  "City Breaks",
  "Food & Culinary Tours",
];

const SearchFilterSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
      {/* Filters Sidebar */}
      <div className="lg:col-span-1 flex flex-col gap-6">
        {/* Start & End City */}
        <Card className="p-6 border border-neutral-200 shadow-lg">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-gray-900 text-lg font-semibold">
              Start & Ending City
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <div>
              <Label className="text-sm text-gray-600 mb-1 block">From</Label>
              <Input placeholder="Search city" className="h-9" />
            </div>
            <div>
              <Label className="text-sm text-gray-600 mb-1 block">To</Label>
              <Input placeholder="Search city" className="h-9" />
            </div>
          </CardContent>
        </Card>

        {/* Price Range */}
        <Card className="p-6 border border-neutral-200 shadow-lg">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-gray-900 text-lg font-semibold">
              Price Range
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <div>
              <Label className="text-sm text-gray-600 mb-1 block">Lowest</Label>
              <Input placeholder="e.g. 1.000.000" className="h-9" />
            </div>
            <div>
              <Label className="text-sm text-gray-600 mb-1 block">
                Highest
              </Label>
              <Input placeholder="e.g. 10.000.000" className="h-9" />
            </div>
          </CardContent>
        </Card>

        {/* Trip Style */}
        <Card className="p-6 border border-neutral-200 shadow-lg">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-gray-900 text-lg font-semibold">
              Trip Style
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-3">
            {tripStyles.map((style) => (
              <div key={style} className="flex items-center gap-3">
                <Checkbox id={style.toLowerCase().replace(/\s/g, "-")} />
                <Label htmlFor={style.toLowerCase().replace(/\s/g, "-")}>
                  {style}
                </Label>
              </div>
            ))}
          </CardContent>
          <CardFooter className="mt-4 p-0">
            <Button variant="link" className="text-blue-600 p-0">
              Show More
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Package Cards */}
      <div className="lg:col-span-3 flex flex-col gap-6 px-4">
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </div>
  );
};

export default SearchFilterSection;
