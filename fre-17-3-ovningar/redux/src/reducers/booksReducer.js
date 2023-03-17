// ADD_BOOK
// payload = { name: "Pippi Långstrump", author: "Astrid Lindgren" }
import uniqid from "uniqid";
import { createSlice } from "@reduxjs/toolkit";

// 1. Skapa en reducer "booksReducer" med en action ADD_BOOK som tar payload
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      return [...state, action.payload]
    default:
      return state;
  }
}

// 2. Skapa en action creator "createBook" som skapar ADD_BOOK action
export const createBook = (name, author) => {
  return { type: "ADD_BOOK", payload: { id: uniqid(), name, author } }
}

// export default booksReducer;

/*
const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    createBook(state, action) { // action.type == "books/createBook"
      return [...state, { id: uniqid(), ...action.payload }]
    }
  }
})

const { createBook } = booksSlice.actions; // action creator
const booksReducer = booksSlice.reducer;
*/

export default booksReducer;


