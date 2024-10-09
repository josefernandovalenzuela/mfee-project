import { Grid } from "@mui/material";

import { HomePage, LoginPage } from "./components/Page";
import { PostPage } from "./components/Page";
import { CategoriesPage } from "./components/Page";

function App() {
  const page: string = "HomePage";
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
          {/* ACT 1 - Render PostPage and CategoriesPage components */}
          {/* ACT 2 - Move the following content to a new component called LoginPage and render it*/}
          {/* ACT 4 - Add conditions to render PostPage, LoginPage and CategoriesPage components */}
          {/* <PageContainer container>
            Login Page
            <Grid item md={4} xs={4} lg={4}>
              //Form
            </Grid>
          </PageContainer> */}
        </Grid>
      </Grid>
    </>
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
