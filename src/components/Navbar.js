import { AppBar, Box, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    tabs: {
        color: 'white',
        textDecoration: 'none',
        margin: '0 10px 0 0'
    }
});

export default function Navbar() {
    const classes = useStyle();
    return (
        <AppBar position="static" >
            <Toolbar variant="dense" >
                <Box component="div" sx={{ flexGrow: 1 }} >
                    <Link to="/" className={classes.tabs} variant="h6" >Fake Publisher</Link>
                    <Link to="/home" className={classes.tabs} variant="h6" >Home</Link>
                    <Link to="/products" className={classes.tabs} variant="h6" >Products</Link>
                    <Link to="/movies" className={classes.tabs} variant="h6" >Movies</Link>
                    <Link to="/count" className={classes.tabs} variant="h6" >Count</Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}