import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch/*, useSelector*/ } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/Actions"

export default function StroeProducts() {

    /*const products = useSelector(state => state);
    console.log(products);*/
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            //console.log(res.data);
            dispatch(setProducts(res.data));
        }).catch(err => console.log(err));
    }, [dispatch]);

    return (
        <Container sx={{ mt: 3 }} >
            <Typography variant="h4" component="div" sx={{ textAlign: "center", mb: 2 }} >Shoping Products</Typography>
            <Product />
        </Container>
    );
}