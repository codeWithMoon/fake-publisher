import { ThumbUp } from "@mui/icons-material";
import { Box, CircularProgress, Container, Grid, Rating, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearData, fetchDetails, getMovieOrShowDetail } from "../redux/MoviesRedux";

export default function MovieDetail() {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getMovieOrShowDetail);
    console.log(data, { imdbID })

    useEffect(() => {
        dispatch(fetchDetails(imdbID));
        return (() => {
            dispatch(clearData());
        })
    }, [dispatch, imdbID]);

    return (
        <Container>
            {Object.keys(data).length === 0 ? <Box sx={{ mt: 2, textAlign: "center" }} ><CircularProgress color="inherit" /></Box> : <Grid container spacing={1} sx={{ mt: 3, }} >
                <Grid item xs={8} >
                    <Typography variant="h4" component="div" >{data.Title}</Typography>
                    <Box sx={{ display: "flex", pt: 2, pb: 2, alignItems: "center" }} >
                        <Rating name="imdbRating" value={parseInt(data.imdbRating)} precision={0.5} max={10} readOnly />
                        <Typography variant="body1" sx={{ ml: 2 }} >{data.imdbRating}</Typography>
                        <Typography variant="body1" sx={{ ml: 2 }} >ImbD Votes: <ThumbUp color="primary" fontSize="small" /> {data.imdbVotes}</Typography>
                        <Typography variant="body1" sx={{ ml: 2 }} >Run Time: {data.Runtime}</Typography>
                    </Box>
                    <Typography paragraph sx={{ textAlign: "justify", pr: 1 }} >{data.Plot}</Typography>
                    <Typography variant="body1">Actors: {data.Actors}</Typography>
                    <Typography variant="body2">Director: {data.Director}</Typography>
                    <Typography variant="body1">Genre: {data.Genre}</Typography>
                    <Typography variant="body2">Country: {data.Contry}</Typography>
                    <Typography variant="body1">Language: {data.Language}</Typography>
                    <Typography variant="body2">Released Date: {data.Released}</Typography>
                    <Typography variant="body1">Awards: {data.Awards}</Typography>
                </Grid>
                <Grid item xs={4} >
                    <img src={data.Poster} alt="..." />
                </Grid>
            </Grid>}
        </Container>
    );
}