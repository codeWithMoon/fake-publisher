import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gerAllShows } from "../redux/MoviesRedux";

export default function Show() {
    let shows = useSelector(gerAllShows);

    return (
        <Box>
            <Typography variant="h3" component="div" sx={{ mt: 2 }} >Shows</Typography>
            <Grid container spacing={1} sx={{ mt: 3, }}>
                {shows.Response === "True" ? shows.Search.map((show, index) => <Grid item key={index} xs={12} md={4} sm={6} lg={3} >
                    <Link to={`/movie/${show.imdbID}`}>
                        <Card>
                            <CardMedia component="img" image={show.Poster} ></CardMedia>
                            <CardContent>
                                <Typography variant="h6" component="div">{show.Title}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>) : <Typography variant="subtitle1" component="p" >{shows.Error}</Typography>}
            </Grid>
        </Box>
    )
}