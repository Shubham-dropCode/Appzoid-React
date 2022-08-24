import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import "./App.css";
import Services from "./Pages/Services";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";
import OurProducts from "./Pages/OurProducts";
import { useEffect } from "react";
import NewHome from "./Pages/NewHome";
import Products from "./Pages/Products";

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
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* Services and Product of above two pages*/}
          <Route path="/OurProducts/:type" element={<Products />} />
          <Route path="/OurServices/:type" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
