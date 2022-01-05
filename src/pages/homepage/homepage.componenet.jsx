import React, { useState, useEffect } from "react";
import CardList from "../../components/card-list/card-list-component";

function Homepage() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("us");
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?" +
          `country=${country}&` +
          "apiKey=86c67467a1b04994a9348d33718410ea"
      );
      const data = await response.json();
      setNews(data.articles);
    };

    getArticles();
  }, []);
  return (
    <div className="home-page">
        
      <CardList articles={news}/>
    </div>
  );
}

export default Homepage;
