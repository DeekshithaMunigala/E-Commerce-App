import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const appStrore = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default appStrore;
