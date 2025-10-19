import { ChangeEvent } from "react";
import { useOptionsQuery } from "../../queries/useOptionsQuery";
import styles from "./Combo.module.css";
type ComboProps = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export default function Combo({ value, onChange, placeholder }: ComboProps) {
  const { data, isLoading, isError } = useOptionsQuery();

  if (isLoading) return <span>Cargando...</span>;
  if (isError) return <span>Error al cargar</span>;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value);

  return (
    <select className={styles.select} value={value} onChange={handleChange}>
      <option value="">{placeholder ?? "Seleccionar"}</option>
      {data!.map((o) => (
        <option key={o.clienteId} value={o.id}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
