import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, selectedProdcutsReducer } from "./Actions";
import { changeTheNumber } from "./Counter";
import MoviesRedux from "./MoviesRedux";
import NoteReducer from "./NoteReducer";

const store = configureStore({
    reducer: {
        allProducts: productsReducer,
        selectedProduct: selectedProdcutsReducer,
        changeNumber: changeTheNumber,
        movies: MoviesRedux,
        notes: NoteReducer
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

//reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()