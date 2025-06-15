import { getAllTravelPackages } from "@/lib/travel-package";
import { useQuery } from "@tanstack/react-query";

export const usePackages = () =>
  useQuery({
    queryKey: ["packages"],
    queryFn: getAllTravelPackages,
  });
