import { useEffect, useState } from "react";
import { useClientesQuery } from "../../queries/useOptionsQuery";
import styles from "./Combo.module.css";
import { useDispatch } from "react-redux";
import { add } from "../../redux/ClienteSlice";
type ComboProps = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export default function Combo({ value, onChange, placeholder }: ComboProps) {
  const { data, isLoading, isError } = useClientesQuery();
  const [chosen, setChosen] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    onChange(chosen);
  }, [chosen, onChange]);

  if (isLoading) return <span>Cargando...</span>;
  if (isError) return <span>Error al cargar</span>;

  return (
    <select
      className={styles.select}
      defaultValue=""
      onChange={(e) => {
        const id = Number(e.currentTarget.value);
        const item = data?.find((x) => x.clienteId === id);
        if (item) {
          setChosen(item.label);
          dispatch(add(id));
        }
      }}
    >
      <option value="">{placeholder ?? "Seleccionar"}</option>
      {data?.map((o) => (
        <option key={o.clienteId} value={o.clienteId}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
