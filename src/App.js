import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Craft from "./pages/Craft";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimeCursor from "./components/AnimeCursor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <AnimeCursor />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/craft" element={<Craft />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
