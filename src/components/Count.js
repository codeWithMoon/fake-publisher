import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/Counter"

export default function Count() {
    const currentNumber = useSelector(state => state.changeNumber);
    const dispatch = useDispatch();
    return (
        <Container>
            <Box sx={{ textAlign: "center", mt: 2 }} >
                <Typography variant="h4" component="div">Counte Increment/Decrement</Typography>
                <Typography variant="h6" component="div">using React Redus</Typography>
                <IconButton color="error" onClick={() => dispatch(decrement())} >
                    <RemoveCircleOutline fontSize="large" />
                </IconButton>
                <Typography variant="h6" component="span" sx={{ mx: 2 }} >{currentNumber}</Typography>
                <IconButton color="success" onClick={() => dispatch(increment())}>
                    <AddCircleOutline fontSize="large" />
                </IconButton>
            </Box>
        </Container>
    );
}