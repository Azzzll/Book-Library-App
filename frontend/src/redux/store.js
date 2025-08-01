import { configureStore } from "@reduxjs/toolkit";
import booksListReducer from "./books/reducer";

const store = configureStore({
  reducer: {
    reducer: {
      books: booksListReducer,
      // filter: filterReducer,
    },
  },
});

export default store;
