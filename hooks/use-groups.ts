import { useQuery } from "@tanstack/react-query";
import { getAllGroups } from "@/libs/group";

export const useGroups = () =>
	useQuery({
		queryKey: ["groups"],
		queryFn: getAllGroups,
	});
