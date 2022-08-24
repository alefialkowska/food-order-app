import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "./showCartSlice";


const store = configureStore({
    reducer: {ui: showCartSlice.reducer}
});

export default store;