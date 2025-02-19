import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import AdmissionForm from "./AdmissionForm";
import Navbar from "./Navbar"; // Import Navbar

function App() {
  return (
    <Router>
      <Navbar />  {/* Navigation Bar Always Visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admission" element={<AdmissionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
