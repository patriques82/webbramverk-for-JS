import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import App from './App';
import todosReducer from "./reducers/todosReducer";
import viewReducer from './reducers/viewReducer';
import booksReducer from "./reducers/booksReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  books: booksReducer,
  view: viewReducer
})

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);