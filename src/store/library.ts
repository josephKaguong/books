import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import Book from "../components/book";




type LibraryState = {
  books:Book[];
}

const anza: LibraryState= {
  books: [] 
};

const librarySlice = createSlice({
  name: 'library',
  initialState:anza,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      const bookExists = state.books.some(book => book.id === action.payload.id);
      if(!bookExists){
      state.books.push(action.payload);
      }
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = librarySlice.actions;
export const libReducer= librarySlice.reducer;