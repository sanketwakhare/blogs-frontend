import React from "react";
import ButtonStories from "../components/ui/button/Button.stories";
import TextFieldStories from "../components/ui/text-field/TextField.stories";
import NavBarStories from "../components/ui/navbar/NavBar.stories";

const ComponentsStories = () => {
  return (
    <div className="flex flex-column m10">
      <h2 className="flex">Components</h2>
      <ButtonStories />
      <hr />
      <TextFieldStories />
      <hr />
      <NavBarStories />
      <hr />
    </div>
  );
};

export default ComponentsStories;
