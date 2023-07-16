import { Route, Routes } from "react-router-dom";
import ArticleDetails from "./components/article/article-details/ArticleDetails";
import AuthorDetails from "./components/author/AuthorDetails";
import HomeLayout from "./features/home/HomeLayout";
import ComponentRoutes from "./routes/ComponentRoutes";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="article/:articleId" element={<ArticleDetails />}></Route>
        <Route path="author/:authorId" element={<AuthorDetails />}></Route>
        <Route path="components/*" element={<ComponentRoutes />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
