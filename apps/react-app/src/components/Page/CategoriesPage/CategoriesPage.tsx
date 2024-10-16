import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { PageContainer } from "./CategoriesPage.styles";
import { Category } from "../../../types";
import TableComponent from "../../Table";

 const categories: Category[] = [
   { id: "663fef70d513515319551d1f", name: "Travel" },
   { id: "663fef70d513515319546d1f", name: "Food" },
 ];

 const headers: string[] = ["Name", "Actions"];

function CategoriesPage() {
  // ACT 6 - Create a state called "rows"
  const [rows, setRows] = useState<Category[] | null>(null);
  // ACT 6 - Call setRows when the component is mounted for first time, use "categories" variable as new value.
  useEffect(() => {
    setRows(categories);
  }, []);
  //ACT 6 - Create two empty functions called "handleEditItem" and "handleDeleteItem"
  function handleEditItem(){}
  function handleDeleteItem(){}
  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: "flex-end", display: "flex" }}>
        //Add category (Icon button)
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
       <TableComponent headers={headers} categories={rows} handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem}/>
      </Grid>
      //Modal
    </PageContainer>
  );
}

export default CategoriesPage;
