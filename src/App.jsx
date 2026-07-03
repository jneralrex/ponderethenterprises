import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Footer from "./components/Footer";
import { useEffect } from "react";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
