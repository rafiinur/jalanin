import { getAllReviews } from "@/lib/reviews";
import { useQuery } from "@tanstack/react-query";

export const useDestinations = () =>
  useQuery({
    queryKey: ["reviews"],
    queryFn: getAllReviews,
  });
