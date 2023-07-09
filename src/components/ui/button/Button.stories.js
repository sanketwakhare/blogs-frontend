import React, { useState } from "react";
import Button from "./Button";

const ButtonStories = () => {
  const [text, setText] = useState("");
  const handleClick = (event) => {
    setText(`${event.target.textContent} clicked`);
  };

  return (
    <div>
      <h4>Buttons</h4>
      <Button className="m10" variant="primary" onClick={handleClick}>
        Primary
      </Button>
      <Button className="m10" variant="secondary" onClick={handleClick}>
        Secondary
      </Button>
      <Button className="m10" onClick={handleClick}>
        Default
      </Button>

      <span>{text}</span>
    </div>
  );
};

export default ButtonStories;
