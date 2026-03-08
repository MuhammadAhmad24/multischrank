import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollToTop from "./components/ScrollToTop";
import PremiumPreloader from "./components/PremiumPreloader";
import MultiSchrankHeader from "./components/Header";
import MultiSchrankFooter from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <>
      {/* {loading && <PremiumPreloader onFinish={() => setLoading(false)} />}

      {!loading && ( */}
        <BrowserRouter>
          <ScrollToTop />
          <MultiSchrankHeader />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <MultiSchrankFooter />
        </BrowserRouter>
       {/* )} */}
    </>
  )
}

export default App
