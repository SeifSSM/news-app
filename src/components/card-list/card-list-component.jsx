import React from "react";
import "./card-list.styles.scss";
import CardItem from "../card-item/card-item.component";
import { motion } from "framer-motion";

function CardList({ articles, isNewsReady }) {
  return isNewsReady ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="card-list">
        {articles.map(({ ...article }) => {
          return <CardItem {...article} />;
        })}
      </div>
    </motion.div>
  ) : null;
}

export default CardList;
