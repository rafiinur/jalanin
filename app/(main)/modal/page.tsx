"use client";

import { useState } from "react";

const daftarPaket = {
  bali: {
    nama: "7 Days Bali Epic Experience",
    harga: 12901750,
    img: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  lombok: {
    nama: "5 Days Lombok Chill Vibes",
    harga: 8300000,
    img: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  rajaampat: {
    nama: "10 Days Raja Ampat Adventure",
    harga: 15700000,
    img: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  labuanbajo: {
    nama: "6 Days Labuan Bajo Sailing",
    harga: 11200000,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

type PaketKey = keyof typeof daftarPaket;

export default function ModalHiling() {
  const [tabunganPerBulan, setTabunganPerBulan] = useState("");
  const [tabunganSaatIni, setTabunganSaatIni] = useState("");
  const [paket, setPaket] = useState<PaketKey>("bali");
  const [hasil, setHasil] = useState<{ sisa: number; waktu: number } | null>(null);
  const [sudahDiklik, setSudahDiklik] = useState(false);

  const handleHitung = () => {
    const perBulan = parseInt(tabunganPerBulan) || 0;
    const saatIni = parseInt(tabunganSaatIni) || 0;

    if (perBulan <= 0) {
      alert("Masukkan jumlah tabungan per bulan yang valid!");
      return;
    }
    if (saatIni < 0) {
      alert("Tabungan saat ini tidak boleh negatif!");
      return;
    }
    const target = daftarPaket[paket].harga;
    const sisa = Math.max(target - saatIni, 0);
    const waktu = perBulan > 0 ? Math.ceil(sisa / perBulan) : 0;

    setHasil({ sisa, waktu });
    setSudahDiklik(true);
  };

  return (
    <main className="min-h-screen px-6 py-10" style={{ background: "#FFF1E7" }}>
      <h1 className="text-center text-[22px] md:text-2xl font-bold text-neutral-900 mb-10 tracking-tight">
        Simulasi Tabungan Pintar untuk Paket Impianmu
      </h1>

      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
        <div className="bg-white md:px-16 px-6 py-12 rounded-2xl shadow-lg border border-orange-100 w-full min-h-[820px] max-h-[820px] flex flex-col items-center text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFB877]">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><rect x="6" y="4" width="12" height="16" rx="2" fill="#FFB877"/><rect x="8" y="6" width="8" height="3" rx="1" fill="#fff"/><rect x="8" y="10" width="3" height="3" rx="1" fill="#fff"/><rect x="13" y="10" width="3" height="3" rx="1" fill="#fff"/><rect x="8" y="15" width="3" height="3" rx="1" fill="#fff"/><rect x="13" y="15" width="3" height="3" rx="1" fill="#fff"/></svg>
            </div>
            <h2 className="font-bold text-lg text-[#FF914D]">Kalkulator Tabungan</h2>
          </div>
          <div className="space-y-6 w-full max-w-lg mx-auto">
            <div>
              <label className="block mb-1 text-sm font-bold text-neutral-700 text-left w-full">
                Tabungan per bulan
              </label>
              <input
                type="number"
                min={0}
                value={tabunganPerBulan}
                onChange={(e) => setTabunganPerBulan(e.target.value)}
                placeholder="Masukkan jumlah tabungan per bulan"
                className="text-base w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#FFF6EE] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 text-left"
              />
            </div>
            <div className="relative">
              <label className="block mb-1 text-sm font-bold text-neutral-700 text-left w-full">
                Pilih Paket
              </label>
              <select
                value={paket}
                onChange={(e) => setPaket(e.target.value as PaketKey)}
                className="text-base w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#FFF6EE] appearance-none placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 text-left"
                style={{ minHeight: 48 }}
              >
                <option value="" disabled>Pilih Paket</option>
                {Object.entries(daftarPaket).map(([key, p]) => (
                  <option key={key} value={key}>
                    {p.nama}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#FF914D]">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5" stroke="#FF914D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <div>
              <label className="block mb-1 text-sm font-bold text-neutral-700 text-left w-full">
                Tabungan saat ini
              </label>
              <input
                type="number"
                min={0}
                value={tabunganSaatIni}
                onChange={(e) => setTabunganSaatIni(e.target.value)}
                placeholder="Masukkan jumlah tabungan saat ini"
                className="text-base w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#FFF6EE] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 text-left"
              />
            </div>
            <button
              onClick={handleHitung}
              className="w-full rounded-lg py-3 font-semibold text-white text-base shadow"
              style={{
                background: "linear-gradient(90deg, #FFB877 0%, #FF914D 100%)",
                boxShadow: "0 2px 8px 0 #FFB87733"
              }}
            >
              Hitung Simulasi
            </button>
          </div>
          {hasil && sudahDiklik && (
            <div
              className={`p-6 rounded-xl mt-8 shadow-inner w-full max-w-lg min-h-[180px] mb-8
                ${parseInt(tabunganSaatIni) >= daftarPaket[paket].harga
                  ? "bg-green-100 border border-green-300"
                  : "bg-[#FFB87733]"}
              `}
            >
              <p className={`mb-1 font-semibold ${parseInt(tabunganSaatIni) >= daftarPaket[paket].harga ? "text-green-700" : "text-neutral-800"}`}>
                Hasil Simulasi
              </p>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-700">Target Paket:</span>
                <span className="font-medium">{daftarPaket[paket].nama}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-700">Total Target:</span>
                <span>Rp {daftarPaket[paket].harga.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-700">Sisa yang dibutuhkan:</span>
                <span>
                  {parseInt(tabunganSaatIni) >= daftarPaket[paket].harga
                    ? "Rp 0"
                    : `Rp ${hasil.sisa.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-neutral-700">Waktu yang dibutuhkan:</span>
                <span>
                  {parseInt(tabunganSaatIni) >= daftarPaket[paket].harga
                    ? "-"
                    : hasil.waktu >= 12
                      ? `${Math.floor(hasil.waktu / 12)} tahun ${hasil.waktu % 12} bulan`
                      : `${hasil.waktu} bulan`}
                </span>
              </div>
              <div className="mt-2">
                <label className="text-xs text-neutral-700">
                  Progress: {Math.min((parseInt(tabunganSaatIni) / daftarPaket[paket].harga) * 100, 100).toFixed(1)}%
                </label>
                <div className="w-full h-2 bg-[#FFE3CC] rounded-full mt-1">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min((parseInt(tabunganSaatIni) / daftarPaket[paket].harga) * 100, 100)}%`,
                      background: parseInt(tabunganSaatIni) >= daftarPaket[paket].harga
                        ? "linear-gradient(90deg, #4ade80 0%, #22c55e 100%)"
                        : "linear-gradient(90deg, #FFB877 0%, #FF914D 100%)"
                    }}
                  />
                </div>
              </div>
              {parseInt(tabunganSaatIni) >= daftarPaket[paket].harga && (
                <div className="mt-4 text-green-700 font-semibold text-sm flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#4ade80"/>
                    <path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Target tabungan sudah tercapai!
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white md:px-16 px-6 py-12 rounded-2xl shadow-lg border border-orange-100 w-full min-h-[820px] max-h-[820px] flex flex-col items-center text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFB877]">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><path d="M6 10l6-4 6 4v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6z" fill="#FFB877"/><path d="M6 10l6 4 6-4" stroke="#FF914D" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            </div>
            <h2 className="font-bold text-lg text-[#FF914D]">Paket Tersedia</h2>
          </div>
          <div className="flex-1 w-full overflow-y-auto" style={{ maxHeight: 700 }}>
            <div className="flex flex-col gap-5 w-full">
              {Object.entries(daftarPaket).map(([key, p]) => (
                <div
                  key={key}
                  className="w-full max-w-md mx-auto bg-[#FFF6EE] border border-orange-100 rounded-2xl shadow flex flex-col items-left text-left"
                >
                  <div className="relative w-full">
                    <img
                      src={p.img}
                      alt={p.nama}
                      className="w-full h-28 object-cover rounded-t-2xl"
                      onError={(e) => (e.currentTarget.src = 'https://placehold.co/340x112?text=No+Image')}
                    />
                    <span className="absolute top-2 left-2 bg-[#FFB877] text-white text-xs px-2 py-0.5 rounded-full shadow font-semibold">
                      Hidden gem
                    </span>
                  </div>
                  <div className="p-3 flex flex-col gap-1 items-left text-left">
                    <h3 className="font-bold text-base text-neutral-900">{p.nama}</h3>
                    <div className="text-xs text-gray-500 mb-1">
                      Destinations: Denpasar, Ubud, Kintamani, Uluwatu, Gili Trawangan
                    </div>
                    <div className="flex flex-wrap items-left justify-left gap-2 text-xs text-gray-600 mb-1">
                      <span className="flex items-left gap-1">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#FF914D" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#FF914D" strokeWidth="2" strokeLinecap="round"/></svg>
                        7 days
                      </span>
                      <span className="flex items-left gap-1">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="8" cy="10" r="3" stroke="#FF914D" strokeWidth="2"/><circle cx="16" cy="10" r="3" stroke="#FF914D" strokeWidth="2"/><path d="M2 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" stroke="#FF914D" strokeWidth="2"/><path d="M14 20v-1a4 4 0 014-4h0a4 4 0 014 4v1" stroke="#FF914D" strokeWidth="2"/></svg>
                        4-10 Group
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                          <ellipse cx="16" cy="23" rx="6" ry="5" fill="#FF914D"/>
                          <ellipse cx="8.5" cy="15" rx="2" ry="2.5" fill="#FF914D"/>
                          <ellipse cx="23.5" cy="15" rx="2" ry="2.5" fill="#FF914D"/>
                          <ellipse cx="12" cy="10" rx="1.5" ry="2" fill="#FF914D"/>
                          <ellipse cx="20" cy="10" rx="1.5" ry="2" fill="#FF914D"/>
                          <line x1="5" y1="5" x2="27" y2="27" stroke="#7C2D12" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        No pet
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#FF914D" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#FF914D" strokeWidth="2" strokeLinecap="round"/></svg>
                        Fully guided
                      </span>
                    </div>
                    <div className="font-bold text-[#FF914D] text-base">
                      Rp{p.harga.toLocaleString("id-ID")}
                      <span className="font-normal text-xs text-gray-500 ml-1">per orang</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white max-w-6xl mx-auto px-10 py-20 min-h-[420px] rounded-2xl text-center shadow-lg border border-orange-100 mb-10">
        <h2 className="text-[#FF914D] font-extrabold text-2xl md:text-3xl mb-10 tracking-tight">Kenapa Pilih Modal Hiling??</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-[#FFB87733] p-8 rounded-xl flex-1 mx-2 flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFB877] mb-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><rect x="6" y="4" width="12" height="16" rx="2" fill="#FFB877"/><rect x="8" y="6" width="8" height="3" rx="1" fill="#fff"/><rect x="8" y="10" width="3" height="3" rx="1" fill="#fff"/><rect x="13" y="10" width="3" height="3" rx="1" fill="#fff"/><rect x="8" y="15" width="3" height="3" rx="1" fill="#fff"/><rect x="13" y="15" width="3" height="3" rx="1" fill="#fff"/></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#FF914D]">Simulasi Akurat</h3>
            <p className="text-base text-gray-600">Perhitungan yang tepat untuk mencapai target tabunganmu</p>
          </div>
          <div className="bg-[#FFB87733] p-8 rounded-xl flex-1 mx-2 flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFB877] mb-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><path d="M8 12h8M12 8v8" stroke="#FF914D" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#FF914D]">Perencanaan Mudah</h3>
            <p className="text-base text-gray-600">Interface yang intuitif untuk merencanakan masa depan finansial</p>
          </div>
          <div className="bg-[#FFB87733] p-8 rounded-xl flex-1 mx-2 flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFB877] mb-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><circle cx="12" cy="12" r="6" stroke="#FF914D" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="#FF914D"/></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#FF914D]">Target Jelas</h3>
            <p className="text-base text-gray-600">Berbagai pilihan paket sesuai kebutuhan dan kemampuan</p>
          </div>
        </div>
      </section>
    </main>
  );
}