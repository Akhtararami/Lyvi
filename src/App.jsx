import { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import InfoProduct from "./pages/InfoProduct"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Bundling from "./pages/Bundling"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/InfoProduct" element={<InfoProduct />} />
          <Route path="/Bundling" element={<Bundling />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
