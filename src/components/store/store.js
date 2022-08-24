import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "./showCartSlice";
import cartContentSlice from "./cartContentSlice";


const store = configureStore({
    reducer: {ui: showCartSlice.reducer, cartContent: cartContentSlice.reducer}
});

export default store;