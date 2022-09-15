import { Calculate, Movie, ShoppingCart } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();
    return (
        <Container sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h4" component="div" >This is home page</Typography>
            <Typography variant="body2">Click Buttons to mover to Desire page</Typography>
            <Box sx={{ mt: 2 }} >
                <IconButton color="primary" onClick={() => navigate("/products")} >
                    <ShoppingCart />
                </IconButton>
                <IconButton color="secondary" onClick={() => navigate("/movies")} >
                    <Movie />
                </IconButton>
                <IconButton onClick={() => navigate("/count")} >
                    <Calculate />
                </IconButton>
            </Box>
        </Container>
    );
}