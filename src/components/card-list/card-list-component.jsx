import React from "react";
import "./card-list.styles.scss";
import CardItem from "../card-item/card-item.component";
import { motion } from "framer-motion";

function CardList({ articles, isReady }) {
  return isReady ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card-list">
        {articles.map(({ ...article }) => {
          return <CardItem {...article} />;
        })}
      </div>
    </motion.div>
  ) :null
}

export default CardList;
