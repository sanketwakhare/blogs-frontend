import ArticleDetails from "./components/article/ArticleDetails";
import AuthorDetails from "./components/author/AuthorDetails";
import ComponentsStories from "./stories/Components.stories";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ComponentsStories />}></Route>
      <Route path="/article/:articleId" element={<ArticleDetails />}></Route>
      <Route path="/author/:authorId" element={<AuthorDetails />}></Route>
    </Routes>
  );
};

export default App;
