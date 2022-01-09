import React, { useState, useEffect } from "react";
import CardList from "../../components/card-list/card-list-component";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./homepage.styles.scss";
import RePick from "../repickpage/repickpage.component";

function Homepage({ country, category }) {
  const [news, setNews] = useState([]);
  const [isNewsReady, setIsNewsReady] = useState(false);
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?" +
          `country=${country}&` +
          `categroy=${category}&` +
          "apiKey=cb29209614cd43d7bf6e6d2d72585211"
      );
      try {
        const data = await response.json();
        setNews(data.articles);
        setIsNewsReady(true);
      } catch (err) {
        setIsNewsReady(false);
      }
    };

    getArticles();
  }, []);
  return news ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="homepage">
        <CardList articles={news} isNewsReady={isNewsReady} />
      </div>
    </motion.div>
  ) : (
    <RePick />
  );
}

export default Homepage;
