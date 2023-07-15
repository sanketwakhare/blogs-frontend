import React from "react";
import ButtonStories from "src/components/ui/button/Button.stories";
import ModalStories from "src/components/ui/modal/Modal.stories";
import ModalContainer from "src/components/ui/modal/ModalContainer.stories";
import NavBarStories from "src/components/ui/navbar/NavBar.stories";
import TextFieldStories from "src/components/ui/text-field/TextField.stories";
import ArticleSummaryCardStories from "src/components/article/article-summary/ArticleSummaryCard.stories";
import ArticleDetailsStories from "src/components/article/article-details/ArticleDetails.stories";
import ChipsStories from "src/components/ui/chip/Chips.stories";
import ToastStories from "src/components/ui/toast/Toast.stories";

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
      <hr />
      <ChipsStories />
      <hr />
      <ToastStories />
      <hr />
      <ArticleSummaryCardStories />
      <hr />
      <ArticleDetailsStories />
    </div>
  );
};

export default ComponentsStories;
