import { Button, Container, FormControl, FormGroup, TextField, Typography } from "@mui/material";
//import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNotes } from "../redux/NoteReducer";

export default function CreateNote() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [note, setNote] = useState({title:"", description:""});

    const newNote = () => {
        dispatch(createNotes(note));
        navigate("/notes");
        /*axios.post('http://localhost:7503/note/add', note).then(res=>{
            //console.log(res.data);
            setNote(res.data);
        navigate("/notes"); 
    }).catch (err=> console.log(err));*/
}

const handleChange = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
}

return (
    <Container>
        <Typography variant="h4" component="div" sx={{ textAlign: 'center', mt: 2 }}>Create a New Note</Typography>
        <FormGroup sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <FormControl >
                <TextField type="text" id="title" name="title" onChange={handleChange} placeholder="Title" required />
                <TextField type="text" id="description" name="description" onChange={handleChange} placeholder="Description" required />
                <Button type="submit" onClick={newNote} >Create</Button>
            </FormControl>
        </FormGroup>
    </Container>
)
}