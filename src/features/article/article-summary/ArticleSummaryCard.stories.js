import React from "react";
import ArticleSummaryCard from "./ArticleSummaryCard";

const ArticleSummaryCardStories = () => {
  const articles = [
    {
      author: {
        id: 1,
        imageUrl: "https://picsum.photos/30/30",
        name: "Sanket Wakhare",
      },
      id: 1,
      title: "Mastering React: A Comprehensive Guide for Beginners",
      description:
        "React has gained immense popularity in the web development world, and for good reason. It is a powerful JavaScript library for building user interfaces, known for its efficiency, reusability, and declarative syntax. In this comprehensive guide, we will walk you through the fundamental concepts of React and help you gain a strong foundation in using this library to create amazing web applications.",
      creationDate: "July 23",
      imageUrl: "https://picsum.photos/id/8/100/100",
      tags: ["React", "JavaScript"],
    },
    {
      author: {
        id: 2,
        imageUrl: "https://picsum.photos/40/40",
        name: "Ayush Scaler",
      },
      id: 2,
      title: "Scaler masterclass in React",
      description:
        "Learn React from scratch and become a pro in it, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, ipsam! Nostrum error architecto tempora sit aliquam optio? Consequuntur tenetur facere velit aspernatur error, incidunt fugit facilis beatae corporis hic? Unde! Quae maxime esse officiis dolor incidunt nulla saepe, corporis natus voluptatum. Molestiae tempore sunt, obcaecati, maxime aliquid mollitia perspiciatis perferendis quod fugiat consequuntur magnam magni reprehenderit odio ratione praesentium velit?",
      creationDate: "May 25, 2023",
      imageUrl: "https://picsum.photos/id/29/100/100",
      tags: ["React", "Redux"],
    },
  ];
  const cardOptions = {};

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
