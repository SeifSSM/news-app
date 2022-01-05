import React from "react";
import "./card-list.styles.scss";
import CardItem from "../card-item/card-item.component";

function CardList({ articles }) {
  return (
    <div className="card-list">
      {articles.map(({ ...article }) => {
          return <CardItem {...article} />;
        })}
    </div>
  );
}

export default CardList;
