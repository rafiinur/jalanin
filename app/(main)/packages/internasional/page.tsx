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
import { Calendar, Star } from "lucide-react";
import React from "react";

const tripStyles = [
  "Water Activities",
  "Cultural Tours",
  "Adventure Trips",
  "Relaxation Retreats",
  "Wildlife Safaris",
  "City Breaks",
  "Food & Culinary Tours",
];

const DestinasiInternasionalPage = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Packages</h2>
        <p className="text-gray-600">
          Use custom and filter search for more personal recomendation
        </p>
      </div>

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
                  <label className="text-sm text-gray-600 mb-1 block">
                    From
                  </label>
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
        <div className="col-span-3 grid grid-cols-3 auto-rows-min gap-6">
          {/* Package Card 1 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop"
                alt="Bali"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium">
                7 Days Bali Epic Experience
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Calendar className="w-4 h-4" />
                <span>7 days</span>
                <span>•</span>
                <span>4-16 Group</span>
                <span>•</span>
                <span>Fully guided</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.4</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">
                    Rp12.901.750
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Package Card 2 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=200&fit=crop"
                alt="Bali"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium">
                7 Days Bali Epic Experience
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Calendar className="w-4 h-4" />
                <span>7 days</span>
                <span>•</span>
                <span>4-16 Group</span>
                <span>•</span>
                <span>Fully guided</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.4</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">
                    Rp12.901.750
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Package Card 3 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop"
                alt="Bali"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium">
                7 Days Bali Epic Experience
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Calendar className="w-4 h-4" />
                <span>7 days</span>
                <span>•</span>
                <span>4-16 Group</span>
                <span>•</span>
                <span>Fully guided</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.4</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">
                    Rp12.901.750
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DestinasiInternasionalPage;
