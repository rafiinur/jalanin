import { useQuery } from "@tanstack/react-query";
import { getAllDestinations } from "@/libs/destinations";

export const useDestinations = () =>
	useQuery({
		queryKey: ["destinations"],
		queryFn: getAllDestinations,
	});
