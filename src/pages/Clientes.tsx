import { useState } from "react";
import Combo from "../components/combo/Combo";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

export default function Clientes() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Clientes</h1>
        <div className={styles.row}>
          <Combo
            value={selected}
            onChange={setSelected}
            placeholder="Elegí una opción"
          />
        </div>
        <div className={styles.selection}>Seleccionado: {selected || "-"}</div>
      </div>

      <div className={styles.card}>
        <div className={styles.actions}>
          <button
            className={styles.button}
            onClick={() => navigate("/historial")}
          >
            Historial
          </button>
        </div>
      </div>
    </div>
  );
}
