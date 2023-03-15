// ADD_BOOK
// payload = { name: "Pippi Långstrump", author: "Astrid Lindgren" }
import uniqid from "uniqid";

// 1. Skapa en reducer "booksReducer" med en action ADD_BOOK som tar payload
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload]
    default:
      return state;
  }
}

// 2. Skapa en action creator "createBook" som skapar ADD_BOOK action
export const createBook = (name, author) => {
  return { type: "ADD_BOOK", payload: { id: uniqid(), name, author } }
}

export default booksReducer;