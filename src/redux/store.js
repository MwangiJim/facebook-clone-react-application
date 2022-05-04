import { configureStore } from "@reduxjs/toolkit";
import { FacebookReducer } from "./reducers/reducerSlice";

let store = configureStore({
    reducer:{
        fbReducer:FacebookReducer.reducer
    }
})

export default store;