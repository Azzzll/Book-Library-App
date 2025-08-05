import { configureStore } from '@reduxjs/toolkit';
import booksListReducer from './slices/booksSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    books: booksListReducer,
    filter: filterReducer,
  },
});

export default store;
