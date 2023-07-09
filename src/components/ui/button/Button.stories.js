import React from "react";
import Button from "./Button";

const ButtonStories = () => {
  return (
    <div>
      <h4>Buttons</h4>
      <Button className="m10" variant="primary">
        Primary
      </Button>
      <Button className="m10" variant="secondary">
        Secondary
      </Button>
      <Button className="m10">Default</Button>
    </div>
  );
};

export default ButtonStories;
