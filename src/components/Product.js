import { ShoppingCart } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Product() {
    const products = useSelector(state => state.allProducts.products);

    return (
        <Grid container spacing={1} sx={{ mt: 3, }} >
            {products.map(item => {
                return <Grid item key={item.id} xs={12} md={4} sm={6} lg={3}>
                    <Card>
                        <CardMedia component="img" image={item.image} alt="..." ></CardMedia>
                        <CardContent>
                            <Typography variant="h6" >{item.title}</Typography>
                            <Typography variant="h6">Price: ${item.price}</Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton >
                                <Link to={`/product/${item.id}`} >
                                    <ShoppingCart color="primary" />
                                </Link>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            })}
        </Grid>
    );
}