import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import "./App.css";
import ComingSoonPage from "./Pages/ComingSoonPage";
import ContactUs from "./Pages/ContactUs";
import OurProducts from "./Pages/OurProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
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
