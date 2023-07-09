import React from "react";
import ButtonStories from "../components/ui/button/Button.stories";
import ModalStories from "../components/ui/modal/Modal.stories";
import NavBarStories from "../components/ui/navbar/NavBar.stories";
import TextFieldStories from "../components/ui/text-field/TextField.stories";
import ModalContainer from "../components/ui/modal/ModalContainer.stories";

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
      <div>
        <h4>Modals</h4>
        <ModalStories />
        <ModalContainer />
      </div>
    </div>
  );
};

export default ComponentsStories;
