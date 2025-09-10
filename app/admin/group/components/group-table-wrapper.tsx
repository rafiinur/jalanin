// components/announcement-table-wrapper.tsx
"use client";

import { useGroups } from "@/hooks/use-groups";
import DestinationTable from "./group-table";

const DestinationTableWrapper = () => {
  const { data, isLoading, error } = useGroups();

  return (
    <DestinationTable data={data?.data} isLoading={isLoading} error={error} />
  );
};

export default DestinationTableWrapper;
