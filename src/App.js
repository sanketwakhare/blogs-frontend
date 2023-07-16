import { Route, Routes } from "react-router-dom";
import ArticleDetails from "./components/article/article-details/ArticleDetails";
import ArticleDetailsStories from "./components/article/article-details/ArticleDetails.stories";
import ArticleSummaryCardStories from "./components/article/article-summary/ArticleSummaryCard.stories";
import AuthorDetails from "./components/author/AuthorDetails";
import ButtonStories from "./components/ui/button/Button.stories";
import ChipsStories from "./components/ui/chip/Chips.stories";
import ModalStories from "./components/ui/modal/Modal.stories";
import ModalContainer from "./components/ui/modal/ModalContainer.stories";
import NavBarStories from "./components/ui/navbar/NavBar.stories";
import TextFieldStories from "./components/ui/text-field/TextField.stories";
import ThemeSwitcherStories from "./components/ui/theme-switcher/ThemeSwitcher.stories";
import ToastStories from "./components/ui/toast/Toast.stories";
import ComponentsLayout from "./stories/ComponentsLayout";
const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}></Route> */}
      <Route path="/article/:articleId" element={<ArticleDetails />}></Route>
      <Route path="/author/:authorId" element={<AuthorDetails />}></Route>
      <Route path="/" element={<ComponentsLayout />}>
        <Route path="buttons" element={<ButtonStories />}></Route>
        <Route path="text-fields" element={<TextFieldStories />}></Route>
        <Route path="navbar" element={<NavBarStories />}></Route>
        <Route
          path="modals"
          element={
            <div>
              <h4>Modals</h4>
              <ModalStories />
              <ModalContainer />
            </div>
          }
        ></Route>
        <Route path="chips" element={<ChipsStories />}></Route>
        <Route path="toasts" element={<ToastStories />}></Route>
        <Route path="theme-switcher" element={<ThemeSwitcherStories />}></Route>
        <Route
          path="article-summary"
          element={<ArticleSummaryCardStories />}
        ></Route>
        <Route
          path="article-details"
          element={<ArticleDetailsStories />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
