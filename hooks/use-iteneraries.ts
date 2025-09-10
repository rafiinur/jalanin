import { useQuery } from "@tanstack/react-query";
import { getAllIteneraries } from "@/libs/iteneraries";

export const useGroups = () =>
	useQuery({
		queryKey: ["groups"],
		queryFn: getAllIteneraries,
	});
