import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
import { setError } from './errorSlice';

const initialState = {
  books: [],
  isLoadingViaAPI: false,
};

export const FetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload);
      if (index !== -1) {
        // Исправлено: index !== -1 вместо 1
        state.books.splice(index, 1); // Исправлено: state.books.splice вместо state.splice
      }
    },
    toggleFavorite: (state, action) => {
      state.books.forEach((book) => {
        // Исправлено: state.books.forEach вместо state.forEach
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(FetchBook.pending, (state) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(FetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false; // Исправлено: убрано state.books.isLoadingViaAPI
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithID(action.payload, 'API'));
      }
    });
    builder.addCase(FetchBook.rejected, (state) => {
      state.isLoadingViaAPI = false; // Исправлено: убрано .book
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI;

export default booksSlice.reducer;
