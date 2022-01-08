import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./country-and-category.styles.scss";
import COUNTRIES_DATA from "./countries.data";
import CATEGORIES_DATA from "./category.data";

function CountryAndCategory({ onCategoryChange, onCountryChange }) {
  const [countrydata, setData] = useState(COUNTRIES_DATA);
  const [categorydata, setCategoryData] = useState(CATEGORIES_DATA);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/news");
  }
  return (
    <div className="country-and-category">
      <h1 className="title">Choose From the Options Below</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="inputs">
          <div className="form-inputs">
            <select
              onChange={(event) => onCountryChange(event)}
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
              onChange={(event) => onCategoryChange(event)}
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
