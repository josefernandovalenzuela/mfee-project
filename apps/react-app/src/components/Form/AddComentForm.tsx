import { ChangeEvent, FormEvent, useState, Dispatch, SetStateAction, useRef } from "react";
import TextField from '@mui/material/TextField';
import { Button, FormControl } from "@mui/material";
import { useFormControlContext } from '@mui/base/FormControl';
import { CommentProp } from "../CommentCard/CommentCard";

interface AddCommentFormProps {
    setCommentsState: Dispatch<SetStateAction<CommentProp[]>>;
}

function AddCommentForm({setCommentsState}: AddCommentFormProps){

    const [inputValue, setInputValue] = useState<string | null>(null);
    let ref = useRef<HTMLButtonElement>();

    function handleSubmit(event: FormEvent<HTMLFormElement>):void{
        event.preventDefault();
        if(inputValue?.length <= 15){
            const newComment: CommentProp = {
                _id: "412fsffaf",
                author: "José Valenzuela",
                content: inputValue || "",
                createdAt: "2024-04-10 12:00:00",
                updatedAt: "2024-04-10 12:00:00",
                __v: "-v",
            }
            setCommentsState((oldValue: CommentProp[]) => {
                return [...oldValue, newComment];
            });
            setInputValue(null);
            if(ref.current){
                ref.current.value = "";
            }
        }
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>):void{
        setInputValue(event.target.value);
        console.log(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="standard"
                fullWidth
                required
                id="comment-id"
                label="Write a comment"
                type="text"
                value={inputValue}
                error={inputValue?.length > 15}
                onChange={handleChange}
                inputRef={ref}
                sx={{pb:2}}
            />
            <Button type="submit" variant="contained" style={{maxWidth: "250px"}}>Add</Button>
        </form>
    );
}

export default AddCommentForm;