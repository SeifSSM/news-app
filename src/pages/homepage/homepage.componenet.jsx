import React, { useState, useEffect } from "react";
import CardList from "../../components/card-list/card-list-component";
import {motion} from "framer-motion";
import './homepage.styles.scss';

function Homepage({ country, category }) {
  const [news, setNews] = useState([]);
  const[isReady,setIsReady]=useState(false);
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?" +
          `country=${country}&` +
          `categroy=${category}&` +
          "apiKey=cb29209614cd43d7bf6e6d2d72585211"
      );
      const data = await response.json();
        setNews(data.articles);
        setIsReady(true);
    };

    getArticles();
    
  }, []);
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.6}}>
      <div className="homepage">
      <CardList articles={news} isReady={isReady} />
    </div>
    </motion.div>
    
  );
}

export default Homepage;
