import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./country-and-category.styles.scss";
import COUNTRIES_DATA from "./countries.data";
import CATEGORIES_DATA from "./category.data";
import { motion } from "framer-motion";
import CustomOption from "../../components/customoption/customoption.componenet";

function CountryAndCategory({ onCategoryChange, onCountryChange }) {
  const [countrydata, setData] = useState(COUNTRIES_DATA);
  const [categorydata, setCategoryData] = useState(CATEGORIES_DATA);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/news");
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="country-and-category">
        <h1 className="title">Choose From the Options Below</h1>

        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="inputs">
            <div className="form-inputs">
              <select
                onChange={(event) => onCountryChange(event)}
                name="countries"
                className="country"
                required
              >
                <option value="" disabled selected>
                  Choose Your Country
                </option>
                {countrydata.map((option) => {
                  return (
                    <CustomOption
                      key={option.id}
                      value={option.value}
                      displayName={option.displayName}
                    />
                  );
                })}
              </select>
              <select
                name="categories"
                className="category"
                onChange={(event) => onCategoryChange(event)}
                required
              >
                <option value="" disabled selected>
                  Choose Your Category
                </option>
                {categorydata.map((option) => {
                  return (
                    <CustomOption
                      key={option.id}
                      value={option.category}
                      displayName={option.category}
                    />
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
    </motion.div>
  );
}

export default CountryAndCategory;
