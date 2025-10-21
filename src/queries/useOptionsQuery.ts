import { useQuery } from "@tanstack/react-query";
import { fetchClientes } from "../services/optionsService";

export function useClientesQuery() {
  return useQuery({ queryKey: ["options"], queryFn: fetchClientes });
}
