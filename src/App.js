import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Ourwork from "./components/Ourwork";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Ourwork />
        <Aboutus />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
