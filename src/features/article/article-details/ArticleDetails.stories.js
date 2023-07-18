import React, { useEffect, useState } from "react";
import ArticleDetails from "./ArticleDetails";

const ArticleDetailsStories = () => {
  // fetch articles from API and use one of the article to display the card
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8823/articles");
        const articlesData = await response.json();
        setArticle(
          articlesData?.articles[
            Math.floor(Math.random() * articlesData?.articles.length)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h4>Article Details Card</h4>
      {article && <ArticleDetails articleId={article.id} className="m10" />}
    </div>
  );
};

export default ArticleDetailsStories;
