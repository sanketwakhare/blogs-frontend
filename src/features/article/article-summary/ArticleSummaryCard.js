import React from "react";
import "./ArticleSummaryCard.scss";
import { Link } from "react-router-dom";
import Chips from "src/components/ui/chip/Chips";
import { toLocalDateString } from "src/common/date-utils";

const ArticleSummaryCard = ({ cardOptions, article, className }) => {
  // const { cardOptions: author, article } = props.cardOptions;
  const { authors } = article;

  const cardContainerClasses = `card-container ${className ? className : ""}`;

  return (
    <div className={cardContainerClasses}>
      <div className="card-header">
        <Link
          to={`/author/${authors[0].username}`}
          className="card-header-author"
        >
          <img
            className="card-header-author__image"
            src={
              authors[0].imageUrl
                ? authors[0].imageUrl
                : "https://picsum.photos/30/30"
            }
            alt="author"
          ></img>
          <div className="card-header-author__name">{authors[0].username}</div>
        </Link>
        <div className="card-header__date">
          {toLocalDateString(article.createdAt)}
        </div>
      </div>
      <Link to={`/article/${article.id}`} className="card-body">
        <div className="card-body__container">
          <div className="card-body__title">{article.title}</div>
          <div className="card-body__contents">{article.body}</div>
        </div>
        <img
          className="card-body__image-container"
          src="https://picsum.photos/id/29/100/100"
          alt="article"
        ></img>
      </Link>
      <div className="card-footer">
        <Chips tags={article.tags} />
      </div>
    </div>
  );
};

export default ArticleSummaryCard;
