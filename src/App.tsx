import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} index />
    </Routes>
  );
}