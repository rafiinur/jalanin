import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SummaryCard from "@/components/summary-card";
import { MapPin, Package, Star, Youtube } from "lucide-react";

const summaryData = [
  {
    title: "Total Paket Travel",
    icon: Package,
    value: 156,
    bgColor: "bg-secondary-300",
  },
  {
    title: "Video Youtube",
    icon: Youtube,
    value: 89,
    bgColor: "bg-primary-600",
  },
  {
    title: "Destinasi",
    icon: MapPin,
    value: 234,
    bgColor: "bg-secondary-600",
  },
  {
    title: "Review",
    icon: Star,
    value: 1243,
    bgColor: "bg-secondary-500",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 p-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </header>
        <div className="flex flex-1 flex-col gap-4 px-4 py-6">
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            {summaryData.map((card) => (
              <SummaryCard
                key={card.title}
                title={card.title}
                icon={card.icon}
                value={card.value}
                bgColor={card.bgColor}
              />
            ))}
          </div>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
