// components/announcement-table-wrapper.tsx
"use client";
import TravelPackagesTable from "./travel-packages-table";
import { usePackages } from "@/hooks/use-packages";

const TravelPackageTableWrapper = () => {
  const { data, isLoading, error } = usePackages();

  return (
    <TravelPackagesTable
      data={data?.data}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default TravelPackageTableWrapper;
