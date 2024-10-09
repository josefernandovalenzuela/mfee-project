import { Grid } from "@mui/material";

import { HomePage, LoginPage } from "./components/Page";
import { PostPage } from "./components/Page";
import { CategoriesPage } from "./components/Page";
import NavBar from "./components/NavBar";
import { PageContainer } from "./components/Page/CategoriesPage/CategoriesPage.styles";

function App() {
  const page: string = "HomePage";
  const postPage: string = "PostPage";
  const loginPage: string = "LoginPage";
  const categoriesPage: string = "CategoriesPage";
  return (
    <>
      <Grid container id="app" direction="column" height="100vh" wrap="nowrap">
        <NavBar />
        <Grid
          container
          item
          wrap="nowrap"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 84px)",
          }}
        >
          {page === "HomePage" && <HomePage />}
          {/* ACT 4 - Add conditions to render PostPage, LoginPage and CategoriesPage components */}
          <PageContainer container>
            {postPage === "PostPage" && <PostPage />}
            {categoriesPage === "CategoriesPage" && <CategoriesPage />}
            {loginPage === "LoginPage" && <LoginPage />}
            <Grid item md={4} xs={4} lg={4}>
              Form
            </Grid>
          </PageContainer> 
        </Grid>
      </Grid>
    </>
  );
}

export default App;
