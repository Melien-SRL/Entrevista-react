import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clientes from "./pages/Clientes";
import UnrelatedPage from "./pages/UnrelatedPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/unrelated" element={<UnrelatedPage />} />
        <Route path="*" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}
