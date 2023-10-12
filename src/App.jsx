import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import ProductInfo from "./Components/ProductInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
