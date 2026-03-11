import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import MultiSchrankHeader from "./components/Header";
import MultiSchrankFooter from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";

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
            {loading && <Preloader onFinish={() => setLoading(false)} />}

            {!loading && (
                <BrowserRouter>
                    <ScrollToTop />
                    <MultiSchrankHeader />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/catalog" element={<Catalog />} />
                    </Routes>

                    <MultiSchrankFooter />
                </BrowserRouter>
            )}
        </>
    );
}

export default App;