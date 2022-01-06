import React, { useState,useEffect } from "react";
import "./country-and-category.styles.scss";
import COUNTRIES_DATA from "./countries.data";
import CATEGORIES_DATA from "./category.data";

function CountryAndCategory() {
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [countrydata, setData] = useState(COUNTRIES_DATA);
  const [categorydata, setCategoryData] = useState(CATEGORIES_DATA);


  function handleSubmit(event) {
    event.preventDefault();
    alert(`your options are ${country}+ ${category}`);
  }
  return (
    <div className="country-and-category">
      <h1 className="title">Choose From the Options Below</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="inputs">
          <div className="form-inputs">
            <select
              onChange={(event) => setCountry(event.target.value)}
              name="countries"
              className="country"
            >
              {countrydata.map((option) => {
                return (
                  <option
                    key={option.id}
                    className="option"
                    value={option.value}
                  >
                    {option.displayName.toUpperCase()}
                  </option>
                );
              })}
            </select>
            <select
              name="categories"
              className="category"
              defaultValue="general"
              onChange={(event) => setCategory(event.target.value)}
            >
              {categorydata.map((option) => {
                return (
                  <option
                    key={option.id}
                    className="option"
                    value={option.category}
                  >
                    {option.category.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="btn">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default CountryAndCategory;
