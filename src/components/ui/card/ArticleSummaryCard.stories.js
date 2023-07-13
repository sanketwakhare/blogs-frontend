import React from "react";
import ArticleSummaryCard from "./ArticleSummaryCard";

const ArticleSummaryCardStories = () => {
  const cardOptions = {
    author: {
      imageUrl: "https://picsum.photos/30/30",
      name: "Sanket Wakhare",
    },
    article: {
      id: 1,
      title: "Mastering React: A Comprehensive Guide for Beginners",
      description:
        "React has gained immense popularity in the web development world, and for good reason. It is a powerful JavaScript library for building user interfaces, known for its efficiency, reusability, and declarative syntax. In this comprehensive guide, we will walk you through the fundamental concepts of React and help you gain a strong foundation in using this library to create amazing web applications.",
      creationDate: "July 23",
      imageUrl: "https://picsum.photos/id/8/100/100",
      tags: ["React", "JavaScript"],
    },
  };

  return (
    <div>
      <h4>Card</h4>
      <ArticleSummaryCard cardOptions={cardOptions} />
    </div>
  );
};

export default ArticleSummaryCardStories;
