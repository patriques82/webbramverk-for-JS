import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from "redux-logger";
import { devToolsEnhancer } from "redux-devtools-extension"

import "./main.css";
import App from './App';
import todosReducer, { createTodo } from "./reducers/todosReducer";
import viewReducer from './reducers/viewReducer';
import booksReducer from "./reducers/booksReducer";


// const rootReducer = combineReducers({
//   todos: todosReducer,
//   view: viewReducer,
//   books: booksReducer
// })
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    todos: todosReducer,
    view: viewReducer,
    books: booksReducer
  }
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
})

// store.subscribe(() => {
//   console.log(store.getState())
// })

// Hemläxa: 
// 1. Lägg till radio button för att filtrera important todos
// 2. Lägg till radio button för att filtrera unimportant todos
// 3. Lägg till reducer som sparar alla actions i en array som skett i appen
// 4. I App.js visa i en sidvy vilka actions som skett

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);