import React from "react";
import "./Card.scss";

// TODO: refactor this component
// make this generic
// add props to Card - e.g. cardOptions
// width, height etc.
const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-header-author">
          <div className="card-header-author__image"></div>
          <div className="card-header-author__name">Author Name</div>
        </div>
        <div className="card-header__date">July 23</div>
      </div>
      <div className="card-body">
        <div className="card-body__container">
          <div className="card-body__title">
            Mastering React: A Comprehensive Guide for Beginners
          </div>
          <div className="card-body__contents">
            React has gained immense popularity in the web development world,
            and for good reason. It is a powerful JavaScript library for
            building user interfaces, known for its efficiency, reusability, and
            declarative syntax. In this comprehensive guide, we will walk you
            through the fundamental concepts of React and help you gain a strong
            foundation in using this library to create amazing web applications.
          </div>
        </div>
        <div className="card-body__image-container">Image</div>
      </div>
      <div className="card-footer">
        <div className="chips-container">
          <div className="chip">React</div>
          <div className="chip">JavaScript</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
