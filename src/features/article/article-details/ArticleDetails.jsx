import React, { useEffect, useState } from "react";
import Button from "src/components/ui/button/Button";
import "./ArticleDetails.scss";
import { Link, useParams } from "react-router-dom";

const ArticleDetails = (props) => {

  let { articleId, className } = props;
  const params = useParams();
  if (!articleId) {
    articleId = params.articleId;
  }
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:8823/articles/${articleId}`);
        const articleData = await response.json();
        setArticle(articleData);
        setAuthor(articleData.authors[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, [articleId]);

  const handleLikeArticleBtnClick = (articleId) => {
    // TODO: implement this function
    console.log(`article ${articleId} liked by user`);
  };

  const handleCommentsArticleBtnClick = (articleId) => {
    // TODO: implement this function
    console.log(`comments section for article ${articleId}`);
  };

  const handleFollowBtnClick = (authorId) => {
    // TODO: implement this function
    console.log(`follow user ${authorId}`);
  };

  const articleDetailsContainerClasses = `article-details-container ${className ? className : ''}`;

  const articleContainer = article && author && <div className={articleDetailsContainerClasses}>
    <div className="article-title">{article.title}</div>
    <div className="author-details-container">
      <Link to={`/author/${author.username}`} className="router-link">
        <img src={author.imageUrl ? author.imageUrl : "https://picsum.photos/30/30"} alt="" className="author-image" />
      </Link>
      <div className="author-details">
        <div className="author-meta">
          <Link to={`/author/${author.username}`} className="router-link">
            <div className="author-name">{author.username}</div>
          </Link>
          <Button className="btn-author-follow" variant="secondary" onClick={() => handleFollowBtnClick(author.username)}>Follow</Button>
        </div>
        <div className="article-meta">
          <div className="article-created-at">{article.creationDate}</div>
        </div>
      </div>
    </div>
    <div className="article-body">
      {article.body}
    </div>
    <div className="article-actions">
      <div className="article-action btn-action-like" onClick={() => handleLikeArticleBtnClick(article.id)}>
        <i className="fa-regular fa-heart fa-lg"></i>
      </div>
      <div className="article-action btn-action-comments" onClick={() => handleCommentsArticleBtnClick(article.id)}>
        <i className="fa-regular fa-comment fa-lg"></i>
      </div>
    </div>
  </div>;

  return article ? articleContainer : <>Loading...</>;
};

export default ArticleDetails;
