import React, { useEffect, useState } from "react";
import Button from "src/components/ui/button/Button";
import "./ArticleDetails.scss";
import { Link, useParams } from "react-router-dom";

const ArticleDetails = (props) => {

  let { articleId } = props;
  const params = useParams();
  if (!articleId) {
    articleId = params.articleId;
  }
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    // TODO: call api to fetch article details by article id/slug
    const descriptionTemplate = (
      <>
        <h4>Introduction:</h4>
        The vast and mysterious depths of the world's oceans have always
        captivated the imagination of scientists and adventurers alike. The deep
        sea, which encompasses more than 90% of Earth's habitable space, remains
        largely unexplored, holding countless secrets and untold wonders. In this
        article, we embark on a thrilling journey to uncover the extraordinary
        life forms that thrive in the abyssal depths, shedding light on the beauty
        and resilience of nature's hidden treasures.
        <h4>The Abyssal Realms::</h4>
        Descending into the depths, one enters a realm of eternal darkness and
        crushing pressure, where temperatures drop to near-freezing levels. It is
        a place that few species can call home, yet those that do have evolved
        remarkable adaptations to survive in these extreme conditions. Here, amid
        the perpetual twilight, we encounter astonishing creatures that defy
        imagination.
        <h4>Bioluminescent Marvels:</h4>
        One of the most enchanting features of the deep sea is the abundance of
        bioluminescent organisms. These mesmerizing creatures emit their own
        light, creating a breathtaking display of colors and patterns.
        Bioluminescence serves various purposes, from attracting prey to finding
        mates or deterring predators. The glow of deep-sea anglerfish, for
        instance, lures unsuspecting prey, while the sparkling trails of
        bioluminescent plankton illuminate the darkness, resembling a starry night
        sky.
      </>
    );

    const article = {
      author: {
        id: 1,
        imageUrl: "https://picsum.photos/30/30",
        name: "Sanket Wakhare",
      },
      id: articleId,
      title:
        "Exploring the Wonders of Deep Sea Life: Unveiling Nature's Hidden Treasures",
      description: descriptionTemplate,
      creationDate: "July 23",
      imageUrl: "https://picsum.photos/id/8/100/100",
      tags: ["React", "JavaScript"],
    };

    setArticle(article);
    setAuthor(article.author);

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

  const articleContainer = article && <div className="article-details-container">
    <div className="article-title">{article.title}</div>
    <div className="author-details-container">
      <Link to={`/author/${author.id}`} className="router-link">
        <img src={author.imageUrl} alt="" className="author-image" />
      </Link>
      <div className="author-details">
        <div className="author-meta">
          <Link to={`/author/${author.id}`} className="router-link">
            <div className="author-name">{author.name}</div>
          </Link>
          <Button className="btn-author-follow" variant="secondary" onClick={() => handleFollowBtnClick(author.id)}>Follow</Button>
        </div>
        <div className="article-meta">
          <div className="article-created-at">{article.creationDate}</div>
        </div>
      </div>
    </div>
    <div className="article-body">
      {article.description}
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
