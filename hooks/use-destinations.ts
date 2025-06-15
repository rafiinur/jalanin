import { useQuery } from "@tanstack/react-query";
import { getAllDestinations } from "@/lib/destinations";

export const useDestinations = () =>
  useQuery({
    queryKey: ["destinations"],
    queryFn: getAllDestinations,
  });
