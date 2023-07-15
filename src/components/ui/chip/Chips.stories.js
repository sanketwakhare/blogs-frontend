import React from "react";
import Chips from "./Chips";

const ChipsStories = () => {
  return (
    <div>
      <h4>Chips</h4>
      <Chips
        className="m10"
        tags={["React", "JavaScript", "Java", "Spring Boot"]}
      />
    </div>
  );
};

export default ChipsStories;
