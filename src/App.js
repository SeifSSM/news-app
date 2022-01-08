import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Homepage from "./pages/homepage/homepage.componenet";
import CountryAndCategory from "./pages/country-and-category/country-and-category.componenet";
import Welcome from "./pages/welcome/welcompage.component";

function App() {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  function onCategoryChange(event) {
    setCategory(event.target.value);
  }
  function onCountryChange(event) {
    setCountry(event.target.value);
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/country-and-category"
          element={
            <CountryAndCategory
              onCountryChange={onCountryChange}
              onCategoryChange={onCategoryChange}
            />
          }
        />
        <Route
          path="/news"
          element={<Homepage country={country} category={category} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
