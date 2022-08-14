import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import "./App.css";
import ComingSoonPage from "./Pages/ComingSoonPage";
import ContactUs from "./Pages/ContactUs";
import OurProducts from "./Pages/OurProducts";
import { useEffect } from "react";
import NewHome from "./Pages/NewHome";

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<NewHome />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/OurProducts" element={<OurProducts />} />
          <Route path="/ComingSoon" element={<ComingSoonPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
