import { Container, Card, CardMedia, CardContent, CardActions, Button, Typography, Rating, Box } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProduct/*, removeSelectedProduct*/ } from "../redux/Actions"

export default function ProductDetails() {
    const id  = useParams();
    let item = useSelector(state => state.selectedProduct);
    console.log(item, id);
    const dispatch = useDispatch();

    /*const fatchDetails = (id) => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
            console.log(res.data);
            dispatch(selectProduct(res.data));
        }).catch(err => console.log(err));
    }*/

    useEffect(() => {
        if (id && id !== "") {
            axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
                console.log(res, id);
                dispatch(selectProduct(res.data));
            }).catch(err => console.log('Error:', err));
        };
    }, [id, dispatch]);

    console.log(item, { id });

    return (
        <Container>
            <Card sx={{ mt: 2 }} >
                <CardMedia component="img" image={item.image} alt="..." />
                <CardContent>
                    <Typography variant="h3" component="div">{item.category}</Typography>
                    <Typography variant="h6" >{item.title}</Typography>
                    <Box sx={{ display: "flex", alignItems:"center" }} >
                        <Rating name="rating" value={item.rating.rate} readOnly />
                        <Typography variant="h6" sx={{ml:1}} >{item.rating.rate}</Typography>
                    </Box>

                    <Typography variant="h6">Price: ${item.price}</Typography>
                    <Typography  variant="body1">{item.description}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="error">ADD to Cart</Button>
                </CardActions>
            </Card>
        </Container>
    );
}