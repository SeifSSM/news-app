import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./card-item.styles.scss";
function CardItem({ title, description, author, url, urlToImage }) {
  return (
    <div className="card-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${urlToImage})`,
        }}
      />
      <header className="card-header">
        <h3 className="title">{title.toUpperCase()}</h3>
        <p className="description">{description}</p>
      </header>
      <div className="card-footer">
        <div className="author">{author}</div>
        <div className="buttons">
          <a href={url} rel="noreferrer" target="_blank">
            <CustomButton type="submit">Read More</CustomButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
