import { useState } from "react";
import "./App.css";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Faqs from "./pages/Faqs";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import NavBar from './components/Navbar';
import Navbar from "./components/Navbar";
import CockNChill from "./components/CockNChill";

function App() {
  return (
    <div className="App bg-[#fff8f6]">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cocktailsandchillspot" element={<CockNChill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
