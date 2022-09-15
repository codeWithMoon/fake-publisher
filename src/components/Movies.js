import { SearchOutlined } from "@mui/icons-material";
import { Container, IconButton, InputBase, Paper } from "@mui/material";
//import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchShows } from "../redux/MoviesRedux";
import Movie from "./Movie";
import Show from "./Show";

export default function Movies() {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();
    const movieText = "harry";
    const showText = "hello"


    const handleClick = (e) => {
        e.preventDefault();
        if (item === "") {
            return alert("Please Enter text to find your desire movie or shows")
        } else {
            dispatch(fetchMovies(item));
            dispatch(fetchShows(item));
            setItem("");
        }

    }

    useEffect(() => {
        dispatch(fetchMovies(movieText));
        dispatch(fetchShows(showText));
        /*axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&s=${movieText}&type=movie`).then(res => {
            console.log(res.data);
            dispatch(getMovies(res.data));
        }).catch(err => console.log("Error:", err));*/
    }, [dispatch]);

    return (
        <Container>
            <Paper component="form" sx={{ mt: 2, p: "2px 4px", display: "flex", alignItems: "center", width: 400 }} >
                <InputBase type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Search for Movies and Shows" sx={{ ml: 1, flex: 1 }} /><IconButton type="submit" onClick={handleClick}><SearchOutlined /></IconButton>
            </Paper>
            <Movie />
            <Show />
        </Container>
    )
}