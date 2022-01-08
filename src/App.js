import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.componenet";
import CountryAndCategory from "./pages/country-and-category/country-and-category.componenet";

function App() {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
 

  function onCategoryChange(event){
    setCategory(event.target.value);
    console.log(category);
  };
  function onCountryChange(event){
    setCountry(event.target.value);
    console.log(country);
  };
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<CountryAndCategory 
        onCountryChange={onCountryChange} onCategoryChange={onCategoryChange}
        />} />
        <Route path="/news" element={<Homepage country={country} category={category} />} />
      </Routes>
    </div>
  );
}

export default App;
