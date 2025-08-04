import { configureStore } from '@reduxjs/toolkit';
import booksListReducer from './books/reducer';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    books: booksListReducer,
    filter: filterReducer,
  },
});

export default store;
