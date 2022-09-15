/** Actions */
export const setProducts = (products) => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    };
};

export const selectProduct = (product) => {
    return {
        type: "SELECT_PRODUCT",
        payload: product
    };
};

export const removeSelectedProduct = () => {
    return {
        type: "REMOVE_SELECTED_PRODUCT"
    };
};

/** Reducers */
const initialState = {
    products: []
}

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_PRODUCTS": return { ...state, products: payload };
        default: return state;
    };
};

export const selectedProdcutsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case "SELECT_PRODUCT": return { ...state, ...payload };
        case "REMOVE_SELECTED_PRODUCT": return {};
        default: return state;
    };
};