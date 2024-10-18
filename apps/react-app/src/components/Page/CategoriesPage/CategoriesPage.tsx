import { Button, Grid, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { PageContainer } from "./CategoriesPage.styles";
import { Category } from "../../../types";
import TableComponent from "../../Table";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, CardContent } from "@mui/material";

 const categories: Category[] = [
   { id: "663fef70d513515319551d1f", name: "Travel" },
   { id: "663fef70d513515319546d1f", name: "Food" },
 ];

 const headers: string[] = ["Name", "Actions"];

 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function CategoriesPage() {
  // ACT 6 - Create a state called "rows"
  const [rows, setRows] = useState<Category[] | null>(null);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<string>("");
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [updatedCategory, setUpdatedCategory] = useState<string>("");
  const [initialValueUpdatedCategory, setInitialValueUpdatedCategory] = useState<string>("");
  // ACT 6 - Call setRows when the component is mounted for first time, use "categories" variable as new value.
  useEffect(() => {
    setRows(categories);
  }, []);
  //ACT 6 - Create two empty functions called "handleEditItem" and "handleDeleteItem"
  function handleDeleteItem(){}

  function handleClose(){
    setIsModalOpened(false);
  }

  function openModal(){
    setIsUpdate(false);
    setIsModalOpened(true);
  }

  function handleCreate(){
    if(newCategory.length === 0){
      setErrorInput(true);
    }else {
      setErrorInput(false);
      setRows([...(rows || []), {id: Math.random.toString(), name: newCategory}]);
      setIsModalOpened(false);
    }
  }

  function handleChange(value: string){
    setNewCategory(value);
    if(value.length > 0){
      setErrorInput(false);
    }else{
      setErrorInput(true);
    }
  }

  function handleChangeUpdate(value: string){
    setUpdatedCategory(value);
    if(value.length > 0){
      setErrorInput(false);
    }else{
      setErrorInput(true);
    }
  }

  function updateCategory(){
    setRows((prevState) => {
      const up = prevState?.map(row => {
        if(row.name === initialValueUpdatedCategory){
          row.name = updatedCategory;
        }
        return row;
      }) || [];
      console.log(up);
      return up;
    });
  }

  function handleEdit(value: string){
    setIsUpdate(true);
    setIsModalOpened(true);
    setUpdatedCategory(value);
    setInitialValueUpdatedCategory(value);
  }

  function handleUpdate(){
    if(updatedCategory.length === 0){
      setErrorInput(true);
    }else{
      updateCategory();
      setIsUpdate(false);
      setIsModalOpened(false);
    }
  }
  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: "flex-end", display: "flex" }}>
        {/* ACT 8 - Use the IconButton component (from MUI) to open the Modal */}
        <IconButton onClick={openModal}><AddCircleOutlineIcon/></IconButton>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
       <TableComponent handleEdit={handleEdit} headers={headers} categories={rows} handleDeleteItem={handleDeleteItem}/>
      </Grid>
      {/* ACT 8 - Create a Modal to add new categories and update existing ones */}
      <Modal
        open={isModalOpened}
        onClose={handleClose}
      >
       <CardContent sx={style}>
          {!isUpdate ? <h3>Create Category</h3> : <h3>Update Category</h3>}
          {!isUpdate ? <TextField label="Name" required fullWidth error={errorInput} onChange={(event) => handleChange(event.target.value)}></TextField> : <TextField label="Name" required fullWidth error={errorInput} onChange={(event) => handleChangeUpdate(event.target.value)} value={updatedCategory}></TextField>}
          <div style={{marginTop: '2rem', textAlign: 'right'}}>
            <Button variant="contained" sx={{mr:1}} onClick={handleClose}>CANCEL</Button>
            {!isUpdate ? <Button variant="contained" onClick={handleCreate}>CREATE</Button> : <Button variant="contained" onClick={handleUpdate}>UPDATE</Button>}
          </div>
       </CardContent>
      </Modal>
    </PageContainer>
  );
}

export default CategoriesPage;
