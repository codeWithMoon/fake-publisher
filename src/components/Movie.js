import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMovies } from "../redux/MoviesRedux";

export default function Movie() {
    const movies = useSelector(getAllMovies);

    return (
        <Box>
            <Typography variant="h3" component="div" sx={{ mt: 2 }} >Movies</Typography>
            <Grid container spacing={1} sx={{ mt: 3, }} >
                {movies.Response === "True" ? (movies.Search.map((movie, index) => <Grid key={index} item xs={12} md={4} sm={6} lg={3} >
                    <Link to={`/movie/${movie.imdbID}`}>
                        <Card >
                            <CardMedia component="img" image={movie.Poster} alt="..." ></CardMedia>
                            <CardContent>
                                <Typography variant="h5" component="div">{movie.Title}</Typography>
                                <Typography variant="subtitle1" component="p">{movie.Year}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>)) : <Typography variant="h3" component="div" >{movies.Error}</Typography>}
            </Grid>
        </Box>
    )
}