import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
      </div>
    </Router>
  );
}

export default App;
