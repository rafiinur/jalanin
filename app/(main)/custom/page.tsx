"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Calendar,
  Search,
  Heart,
  PlusCircle,
  XCircle,
  Clock,
  Users,
  MapPin,
  PawPrint,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Tipe Data (dari bagian form) ---
type PreferencesState = {
  [key: string]: boolean;
};
type DynamicField = "from" | "to" | "itinerary";

// --- Komponen Utama ---
const FullPackageCreatorPage = () => {
  // --- STATE MANAGEMENT UNTUK FORM ---
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [fromLocations, setFromLocations] = useState([""]);
  const [toLocations, setToLocations] = useState([""]);
  const [itineraries, setItineraries] = useState([""]);
  const [preferences, setPreferences] = useState<PreferencesState>({
    "Pet friendly": false,
    "Tour guide": false,
    Private: false,
    "Akomodasi hotel": false,
    Transportasi: false,
    "Makan dan cemilan": false,
  });

  // --- HANDLERS UNTUK FORM ---
  const getDynamicState = (field: DynamicField) => {
    if (field === "from")
      return { state: fromLocations, setter: setFromLocations };
    if (field === "to") return { state: toLocations, setter: setToLocations };
    return { state: itineraries, setter: setItineraries };
  };
  const handleDynamicInputChange = (
    index: number,
    value: string,
    field: DynamicField
  ) => {
    const { state, setter } = getDynamicState(field);
    const newState = [...state];
    newState[index] = value;
    setter(newState);
  };
  const addDynamicInput = (field: DynamicField) => {
    const { state, setter } = getDynamicState(field);
    setter([...state, ""]);
  };
  const removeDynamicInput = (index: number, field: DynamicField) => {
    const { state, setter } = getDynamicState(field);
    if (state.length > 1) {
      setter(state.filter((_, i) => i !== index));
    }
  };
  const handlePreferenceChange = (key: string) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const selectedPreferences = Object.keys(preferences)
    .filter((key) => preferences[key])
    .join(", ");
  const hasFromLocations = fromLocations.some((loc) => loc.trim() !== "");
  const hasToLocations = toLocations.some((loc) => loc.trim() !== "");
  const hasItineraries = itineraries.some((itin) => itin.trim() !== "");

  // --- STYLING & RENDER FUNCTION (dari bagian form) ---
  const inputStyle =
    "bg-orange-50 border-orange-200 focus-visible:ring-orange-400 h-12";
  const iconStyle =
    "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500";
  const renderDynamicInputs = (field: DynamicField, placeholder: string) => {
    const { state } = getDynamicState(field);
    return (
      <>
        {state.map((item, index) => (
          <div key={`${field}-${index}`} className="relative">
            <Search className={iconStyle} />
            <Input
              placeholder={placeholder}
              className={`${inputStyle} pl-10`}
              value={item}
              onChange={(e) =>
                handleDynamicInputChange(index, e.target.value, field)
              }
            />
            {state.length > 1 && (
              <XCircle
                onClick={() => removeDynamicInput(index, field)}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 cursor-pointer"
              />
            )}
          </div>
        ))}
        <p
          onClick={() => addDynamicInput(field)}
          className="text-xs text-gray-500 mt-[-10px] ml-1 cursor-pointer hover:underline flex items-center gap-1"
        >
          <PlusCircle className="h-3 w-3" /> More
        </p>
      </>
    );
  };

  return (
    <div className="bg-slate-50/50 py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4">
        {/* ================================================================== */}
        {/* ================== BAGIAN 1: FORM PEMBUATAN PAKET ================ */}
        {/* ================================================================== */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-300">
            Buat Paketmu Sendiri!
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Pilih sendiri tujuan, durasi dan pengalaman—semua dalam kendalimu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Calendar className={iconStyle} />
                <Input
                  type="text"
                  placeholder="Tanggal mulai"
                  className={`${inputStyle} pl-10`}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>
              <div className="relative">
                <Calendar className={iconStyle} />
                <Input
                  type="text"
                  placeholder="Tanggal selesai"
                  className={`${inputStyle} pl-10`}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>
            </div>
            {renderDynamicInputs("from", "Dari (negara/wilayah/kota)")}
            {renderDynamicInputs("to", "Ke (negara/wilayah/kota)")}
            {renderDynamicInputs("itinerary", "Destinasi (Itinerary)")}
          </div>
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Jumlah orang"
              className={inputStyle}
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
            />
            <Card className="p-4 border-orange-200 bg-orange-50">
              <Label className="font-semibold text-gray-700 mb-3 block">
                Preferensi
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(preferences).map((key) => (
                  <div className="flex items-center space-x-2" key={key}>
                    <Checkbox
                      id={key}
                      checked={preferences[key]}
                      onCheckedChange={() => handlePreferenceChange(key)}
                    />
                    <Label
                      htmlFor={key}
                      className="font-normal text-gray-600 text-sm cursor-pointer"
                    >
                      {key}
                    </Label>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <Card className="mt-8 border-gray-300">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Detail Paket
            </h3>
            <div className="flex items-start gap-4 text-gray-600">
              <Calendar className="h-6 w-6 text-gray-500 mt-1 flex-shrink-0" />
              <div className="text-sm space-y-1">
                <p>
                  {startDate || endDate
                    ? `${startDate || "..."} - ${endDate || "..."}`
                    : "Tanggal Mulai - Tanggal Selesai"}
                </p>
                {hasFromLocations ? (
                  fromLocations.map(
                    (loc, i) => loc && <p key={`from-${i}`}>{`Dari: ${loc}`}</p>
                  )
                ) : (
                  <p>Dari (negara/kota)</p>
                )}
                {hasToLocations ? (
                  toLocations.map(
                    (loc, i) => loc && <p key={`to-${i}`}>{`Ke: ${loc}`}</p>
                  )
                ) : (
                  <p>Ke (negara/kota)</p>
                )}
                {hasItineraries ? (
                  itineraries.map(
                    (itin, i) =>
                      itin && <p key={`itin-${i}`}>{`Itinerary: ${itin}`}</p>
                  )
                ) : (
                  <p>Itinerary</p>
                )}
                <p>
                  {guestCount ? `Jumlah Orang: ${guestCount}` : "Jumlah Orang"}
                </p>
                <p>
                  {selectedPreferences
                    ? `Preferensi: ${selectedPreferences}`
                    : "Preferensi"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            variant="outline"
            className="w-full sm:w-auto border-gray-300 hover:bg-gray-100"
          >
            <Heart className="w-4 h-4 mr-2 text-blue-500" />
            Tambahkan ke wishlist
          </Button>
          <Button className="w-full sm:w-auto bg-orange-400 hover:bg-orange-400 text-white">
            Pesan sekarang
          </Button>
        </div>

        {/* ================================================================== */}
        {/* ================= BAGIAN 2: WISHLIST PAKET (STATIS) ============= */}
        {/* ================================================================== */}
        <section className="mt-16 pt-12 border-t">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-orange-300">
              Wishlist Paket
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Card 1: Bali Epic Experience */}
            <Card className="border border-neutral-200/90 shadow-sm p-0 w-full overflow-hidden rounded-xl">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative flex-shrink-0 w-full md:w-64 h-52 md:h-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1470&auto=format&fit=crop"
                      alt="Bali Epic Experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Link
                        href="#"
                        className="text-xl font-semibold text-gray-800 leading-snug hover:text-blue-600"
                      >
                        7 Days Bali Epic Experience
                      </Link>
                      <Button
                        variant="outline"
                        className="border-orange-400 text-orange-500 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap"
                      >
                        Pesan Sekarang
                      </Button>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3 text-gray-600">
                      <div className="flex items-center gap-1.5 text-sm">
                        <Clock className="w-4 h-4" />7 days
                      </div>
                      <div className="flex items-center gap-1.5 text-sm">
                        <Users className="w-4 h-4" />
                        4-10 Group
                      </div>
                      <div className="flex items-center gap-1.5 text-sm">
                        <MapPin className="w-4 h-4" />
                        Fully guided
                      </div>
                    </div>
                    <div className="text-sm space-y-1 mb-4">
                      <div>
                        <span className="font-medium text-gray-700">
                          Destinations:{" "}
                        </span>
                        <span className="text-gray-600">
                          Denpasar, Ubud, Kintamani, Uluwatu, Gili Trawangan.
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Excluded:{" "}
                        </span>
                        <span className="text-gray-600">
                          Accomodations, meals
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-auto">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <PawPrint className="w-4 h-4 text-green-600" />
                        Pet friendly
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

            {/* Card 2: Java & Bali Tour */}
            <Card className="border border-neutral-200/90 shadow-sm p-0 w-full overflow-hidden rounded-xl">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative flex-shrink-0 w-full md:w-64 h-52 md:h-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1470&auto=format&fit=crop"
                      alt="Bali Epic Experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Link
                        href="#"
                        className="text-xl font-semibold text-gray-800 leading-snug hover:text-blue-600"
                      >
                        7 Days Bali Epic Experience
                      </Link>
                      <Button
                        variant="outline"
                        className="border-orange-400 text-orange-500 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap"
                      >
                        Pesan Sekarang
                      </Button>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3 text-gray-600">
                      <div className="flex items-center gap-1.5 text-sm">
                        <Clock className="w-4 h-4" />7 days
                      </div>
                      <div className="flex items-center gap-1.5 text-sm">
                        <Users className="w-4 h-4" />
                        4-10 Group
                      </div>
                      <div className="flex items-center gap-1.5 text-sm">
                        <MapPin className="w-4 h-4" />
                        Fully guided
                      </div>
                    </div>
                    <div className="text-sm space-y-1 mb-4">
                      <div>
                        <span className="font-medium text-gray-700">
                          Destinations:{" "}
                        </span>
                        <span className="text-gray-600">
                          Denpasar, Ubud, Kintamani, Uluwatu, Gili Trawangan.
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Excluded:{" "}
                        </span>
                        <span className="text-gray-600">
                          Accomodations, meals
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-auto">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <PawPrint className="w-4 h-4 text-green-600" />
                        Pet friendly
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
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              className="w-full md:w-auto rounded-full bg-slate-200 text-blue-800 hover:bg-slate-300 font-semibold shadow-sm"
            >
              Lihat lebih banyak
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullPackageCreatorPage;
