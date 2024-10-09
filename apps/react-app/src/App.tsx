import { Grid } from "@mui/material";

import { HomePage, LoginPage } from "./components/Page";
import { PostPage } from "./components/Page";
import { CategoriesPage } from "./components/Page";

function App() {
  return (
    <>
      <HomePage />
      <PostPage />
      <CategoriesPage />
      {/* ACT 2 - Move the following content to a new component called LoginPage and render it*/}
     <LoginPage/>
    </>
  );
}

export default App;
