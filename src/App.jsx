import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [tempUnit, setTempUnit] = useState("C"); // "C" or "F"

  return (
    <>
      <Navbar tempUnit={tempUnit} setTempUnit={setTempUnit} />
      <Home tempUnit={tempUnit} />
    </>
  );
}

export default App;
