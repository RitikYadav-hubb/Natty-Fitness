import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./Pages/home";
import Diet from "./Pages/diet";
import Exercise from "./Pages/exercise";
import Protein from "./Pages/protein";
import Contact from "./Pages/contact";
import Signup from "./Pages/signup";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/protein" element={<Protein />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
