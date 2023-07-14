import React from "react";
import "./ArticleSummaryCard.scss";
import { Link } from "react-router-dom";

// TODO: add click handlers

const ArticleSummaryCard = ({ cardOptions, article }) => {
  // const { cardOptions: author, article } = props.cardOptions;
  const { author } = article;
  return (
    <div className="card-container">
      <div className="card-header">
        <Link to={`/author/${author.id}`} className="card-header-author">
          <img
            className="card-header-author__image"
            src={author.imageUrl}
            alt="author"
          ></img>
          <div className="card-header-author__name">{author.name}</div>
        </Link>
        <div className="card-header__date">{article.creationDate}</div>
      </div>
      <Link to={`/article/${article.id}`} className="card-body">
        <div className="card-body__container">
          <div className="card-body__title">{article.title}</div>
          <div className="card-body__contents">{article.description}</div>
        </div>
        <img
          className="card-body__image-container"
          src={article.imageUrl}
          alt="article"
        ></img>
      </Link>
      <div className="card-footer">
        <div className="chips-container">
          {article.tags.map((tag) => {
            return <div className="chip">{tag}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleSummaryCard;
