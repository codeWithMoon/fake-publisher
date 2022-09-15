/** Actions functions */
export const increment = () => { return { type: "INCREMENT" } };
export const decrement = () => { return { type: "DECREMENT" } };

/** Reducers functions */
const initialState = 0;

export const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
} 