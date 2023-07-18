import React, { useEffect, useState } from "react";
import ArticleSummaryCard from "./ArticleSummaryCard";

const ArticleSummaryCardStories = () => {
  const cardOptions = {};
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8823/articles");
        const articlesData = await response.json();
        console.log(articlesData.articles);
        setArticles(articlesData.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h4>Card</h4>
      {articles.map((article) => (
        <ArticleSummaryCard
          cardOptions={cardOptions}
          article={article}
          key={article.id}
          className="m10"
        />
      ))}
    </div>
  );
};

export default ArticleSummaryCardStories;
