import { useQuery } from "@tanstack/react-query";
import { fetchOptions } from "../services/optionsService";

export function useOptionsQuery() {
  return useQuery({ queryKey: ["options"], queryFn: fetchOptions });
}
