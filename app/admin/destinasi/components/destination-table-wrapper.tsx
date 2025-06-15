// components/announcement-table-wrapper.tsx
"use client";

import { useDestinations } from "@/hooks/use-destinations";
import DestinationTable from "./destinations-table";

const DestinationTableWrapper = () => {
  const { data, isLoading, error } = useDestinations();

  return (
    <DestinationTable data={data?.data} isLoading={isLoading} error={error} />
  );
};

export default DestinationTableWrapper;
