import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Ourwork from "./components/Ourwork";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Ourwork />
      </div>
    </Router>
  );
}

export default App;
