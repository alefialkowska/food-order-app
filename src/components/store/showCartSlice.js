import { createSlice } from '@reduxjs/toolkit'

const initialShowCartState = {showCart: false};
const showCartSlice = createSlice({
    name: "showCart",
    initialState: initialShowCartState,
    reducers: {
        toggleVisibility(state) {
            state.showCart = !state.showCart;
        }
    }
});

export default showCartSlice;
export const showCartActions = showCartSlice.actions;