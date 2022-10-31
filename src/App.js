import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Nav from "./components/Nav/Nav";
import Doctor from "./pages/Doctor";
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import Pharmacy from "./pages/Pharmacy";
import Registrar from "./pages/Registrar";
import Laboratory from "./pages/Laboratory";
import Header from "./components/Nav/Header";
import Admin from "./pages/Admin";
import "./pages/App.css"
import Manager from "./pages/Manager";
// import TestNav from "./components/TestNav";
const App = () =>{
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);
  return (
    <div>
      <Header />
      <div class="row">
        <div className="col-2 sticky-top">
          <Nav />
          {/* <TestNav /> */}
        </div>
        <div class="d-flex col-10 w-75 m-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route
              path="/signin"
              element={<SignIn user={user} setUser={setUser} />}
            />
            <Route
              path="/signup"
              element={<SignUp onLogin={() => setLogin(login)} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
