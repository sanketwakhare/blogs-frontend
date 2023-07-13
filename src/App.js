import ComponentsStories from "./stories/Components.stories";
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ComponentsStories />}></Route>
    </Routes>
  );
};

export default App;
