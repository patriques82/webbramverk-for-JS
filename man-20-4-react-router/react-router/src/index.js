import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

// 1. Skapa en redux store med reducer books (["Pippi Långstrump"])
// 2. Lägg in Provider med store
// 3. Skapa 1 komponent (BookInput) som består av input text fält
// 4. Skapa 1 komponent (BooksOutput) som visar böcker i lista <ul>
// 5. Lägg till knapp som tar bort böcker

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      return [...state, action.payload]; // payload { id: 12, book: "pippi" }
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.payload)
    default:
      return state;
  }
}
// för att använda redux devtools
const enhancer = composeWithDevTools()
const store = createStore(booksReducer, [], enhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);