import { configureStore } from '@reduxjs/toolkit';
import booksListReducer from './slices/booksSlice';
import filterReducer from './slices/filterSlice';
import errorReducer from './slices/errorSlice';

const store = configureStore({
  reducer: {
    books: booksListReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
