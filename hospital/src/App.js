import { Routes, Route } from "react-router-dom";
import Doctor from "./pages/Doctor";
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import Pharmacy from "./pages/Pharmacy";
import Registrar from "./pages/Registrar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    </div>
  );
}

export default App;
