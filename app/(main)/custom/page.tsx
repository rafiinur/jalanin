"use client";

import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  Plane,
  Heart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CustomPackagePage = () => {
  const [formData, setFormData] = useState({
    tanggalMulai: "",
    tanggalSelesai: "",
    jumlahOrang: "",
    dariWilayah: "",
    keWilayah: "",
    destinasi: "",
    preferences: {
      petFriendly: false,
      tourGuide: false,
      wifi: false,
      akumulasiHotel: false,
      transportasi: false,
      makananTambahan: false,
    },
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePreferenceChange = (preference) => {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: !prev.preferences[preference],
      },
    }));
  };

  const calculateDuration = () => {
    if (formData.tanggalMulai && formData.tanggalSelesai) {
      const start = new Date(formData.tanggalMulai);
      const end = new Date(formData.tanggalSelesai);
      return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const getSelectedPreferences = () => {
    const labels = {
      petFriendly: "Pet friendly",
      tourGuide: "Tour guide",
      wifi: "Wi-Fi",
      akumulasiHotel: "Akumulasi Hotel",
      transportasi: "Transportasi",
      makananTambahan: "Makanan dan camilan",
    };

    return Object.entries(formData.preferences)
      .filter(([key, value]) => value)
      .map(([key]) => labels[key]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Buat Paketmu Sendiri!
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih sendiri tujuan, durasi dan pengalaman—semua dalam kendalimu.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Date Selection Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="text-orange-500" size={24} />
                  Pilih Tanggal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tanggal-mulai">Tanggal mulai</Label>
                    <Input
                      id="tanggal-mulai"
                      type="date"
                      value={formData.tanggalMulai}
                      onChange={(e) =>
                        handleInputChange("tanggalMulai", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tanggal-selesai">Tanggal selesai</Label>
                    <Input
                      id="tanggal-selesai"
                      type="date"
                      value={formData.tanggalSelesai}
                      onChange={(e) =>
                        handleInputChange("tanggalSelesai", e.target.value)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location and People Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="text-orange-500" size={24} />
                  Lokasi & Jumlah Orang
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Jumlah orang</Label>
                  <Select
                    value={formData.jumlahOrang}
                    onValueChange={(value) =>
                      handleInputChange("jumlahOrang", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jumlah orang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 orang</SelectItem>
                      <SelectItem value="2">2 orang</SelectItem>
                      <SelectItem value="3">3 orang</SelectItem>
                      <SelectItem value="4">4 orang</SelectItem>
                      <SelectItem value="5+">5+ orang</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Dari (Wilayah/Kota)</Label>
                  <Select
                    value={formData.dariWilayah}
                    onValueChange={(value) =>
                      handleInputChange("dariWilayah", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih wilayah asal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jakarta">Jakarta</SelectItem>
                      <SelectItem value="bandung">Bandung</SelectItem>
                      <SelectItem value="surabaya">Surabaya</SelectItem>
                      <SelectItem value="medan">Medan</SelectItem>
                      <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Ke (Wilayah/Kota)</Label>
                  <Select
                    value={formData.keWilayah}
                    onValueChange={(value) =>
                      handleInputChange("keWilayah", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih destinasi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bali">Bali</SelectItem>
                      <SelectItem value="lombok">Lombok</SelectItem>
                      <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                      <SelectItem value="bandung">Bandung</SelectItem>
                      <SelectItem value="malang">Malang</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Destinasi (Opsional)</Label>
                  <Select
                    value={formData.destinasi}
                    onValueChange={(value) =>
                      handleInputChange("destinasi", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih destinasi spesifik" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pantai">Pantai</SelectItem>
                      <SelectItem value="gunung">Gunung</SelectItem>
                      <SelectItem value="kota">Wisata Kota</SelectItem>
                      <SelectItem value="budaya">Wisata Budaya</SelectItem>
                      <SelectItem value="kuliner">Wisata Kuliner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Preferences Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="text-orange-500" size={24} />
                  Preferensi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { key: "petFriendly", label: "Pet friendly" },
                    { key: "tourGuide", label: "Tour guide" },
                    { key: "wifi", label: "Wi-Fi" },
                    { key: "akumulasiHotel", label: "Akumulasi Hotel" },
                    { key: "transportasi", label: "Transportasi" },
                    { key: "makananTambahan", label: "Makanan dan camilan" },
                  ].map((pref) => (
                    <div key={pref.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={pref.key}
                        checked={formData.preferences[pref.key]}
                        onCheckedChange={() => handlePreferenceChange(pref.key)}
                      />
                      <Label
                        htmlFor={pref.key}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {pref.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Package Details Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="text-orange-500" size={24} />
                  Detail Paket
                </CardTitle>
              </CardHeader>
              <CardContent>
                {formData.tanggalMulai && formData.tanggalSelesai ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Durasi</span>
                      <Badge variant="secondary">
                        {calculateDuration()} hari
                      </Badge>
                    </div>

                    {formData.jumlahOrang && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Jumlah orang
                        </span>
                        <Badge variant="secondary">
                          {formData.jumlahOrang}
                        </Badge>
                      </div>
                    )}

                    {formData.dariWilayah && formData.keWilayah && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Rute</span>
                        <Badge variant="outline" className="text-xs">
                          {formData.dariWilayah} → {formData.keWilayah}
                        </Badge>
                      </div>
                    )}

                    {getSelectedPreferences().length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="font-semibold mb-2">
                            Preferensi dipilih:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {getSelectedPreferences().map((pref, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {pref}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span>Estimasi Harga</span>
                        <span className="text-orange-500">Rp 2.500.000</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        *Harga dapat berubah sesuai ketersediaan
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <Clock
                      size={48}
                      className="mx-auto mb-4 text-muted-foreground/50"
                    />
                    <p>Pilih tanggal untuk melihat detail paket</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600"
                size="lg"
              >
                <Users className="mr-2" size={20} />
                Pesan Sekarang
              </Button>
              <Button
                variant="outline"
                className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
                size="lg"
              >
                <Heart className="mr-2" size={20} />
                Tambahkan ke Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPackagePage;
