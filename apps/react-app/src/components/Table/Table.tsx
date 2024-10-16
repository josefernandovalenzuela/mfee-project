import { Category } from "../../types";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";
import {Paper} from "@mui/material";

interface TableProps{
    headers: string[],
    categories: Category[] | null,
    handleEditItem: () => void,
    handleDeleteItem: () => void
}

function TableComponent({headers, categories, handleEditItem, handleDeleteItem}:TableProps){
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map(header => {
                            return <TableCell>{header}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories?.map(category => {
                        return (
                            <TableRow>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>
                                    <IconButton sx={{alignSelf: 'center'}}><DeleteIcon/></IconButton>
                                    <IconButton sx={{alignSelf: 'center'}}><EditIcon/></IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableComponent;