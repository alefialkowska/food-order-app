import { createSlice } from "@reduxjs/toolkit";

const initialCartContentState = {items: [], totalQuantity: 0, totalPrice: 0};
const cartContentSlice = createSlice({
    name: "cartContent",
    initialState: initialCartContentState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const exisitingItemIndex = state.items.findIndex(item => item.id === newItem.id);
            let updatedItem;
            state.totalQuantity = state.totalQuantity + newItem.quantity;
            state.totalPrice = (state.totalPrice + newItem.quantity * newItem.price).toFixed(2) * 1;
            if (exisitingItemIndex >= 0) {
                updatedItem = state.items[exisitingItemIndex];
                updatedItem.quantity++;
                state.items[exisitingItemIndex] = updatedItem;
            } else if (exisitingItemIndex < 0) {
                state.items.push(newItem)
            } else return;
        },
        removeItem(state, action) {
            const id = action.payload;
            const exisitingItem = state.items.find(item => item.id === id);
            state.totalPrice = (state.totalPrice - exisitingItem.price).toFixed(2) * 1;
            state.totalQuantity--;
            if (exisitingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);             
            } else {
                exisitingItem.quantity--;
                console.log(state.items);
                console.log(exisitingItem)
            }

        }
    }
});

export default cartContentSlice;
export const cartContentActions = cartContentSlice.actions;


