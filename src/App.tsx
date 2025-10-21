import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Historial from "./pages/Historial";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="*" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}
