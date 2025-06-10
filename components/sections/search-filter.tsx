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
import PackageCard from "../package-card";

const tripStyles = [
  "Water Activities",
  "Cultural Tours",
  "Adventure Trips",
  "Relaxation Retreats",
  "Wildlife Safaris",
  "City Breaks",
  "Food & Culinary Tours",
];

const SearchFilter = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {/* Filters Sidebar */}
      <div className="col-span-1 flex flex-col gap-4">
        <Card className="p-6 border-neutral-200 shadow-md">
          <CardHeader className="p-0">
            <CardTitle>
              <h3 className="font-semibold text-gray-900">
                Start & Ending City
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            {/* Start & Ending City */}

            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">From</label>
                <Input placeholder="Search city" className="h-9" />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">To</label>
                <Input placeholder="Search city" className="h-9" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="p-6 border-neutral-200 shadow-md">
          <CardHeader className="p-0">
            <CardTitle>
              <h3 className="font-semibold text-gray-900">Price Range</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            {/* Start & Ending City */}

            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Lowest
                </label>
                <Input placeholder="Search city" className="h-9" />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Highest
                </label>
                <Input placeholder="Search city" className="h-9" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="p-6 border-neutral-200 shadow-md">
          <CardHeader className="p-0">
            <CardTitle>
              <h3 className="font-semibold text-gray-900">Trip Style</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Start & Ending City */}
            <div className="space-y-4">
              {tripStyles.map((style) => (
                <div key={style} className="flex items-end center gap-3">
                  <Checkbox id={style.toLowerCase().replace(/\s/g, "-")} />
                  <Label htmlFor={style.toLowerCase().replace(/\s/g, "-")}>
                    {style}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-0">
            <Button variant={"link"}>Show More</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Package Cards */}
      <div className="col-span-3 flex flex-col gap-4">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </div>
  );
};

export default SearchFilter;
