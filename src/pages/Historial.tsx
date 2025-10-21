import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

export default function Historial() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Historial</h1>
        <div className={styles.row}></div>
        <div className={styles.selection}>Cliente: {"Ejemplo"}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.actions}>
          <button
            className={styles.button}
            onClick={() => navigate("/clientes")}
          >
            Clientes
          </button>
        </div>
      </div>
    </div>
  );
}
