import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";

import App from './App';
import { counterReducer } from './counterReducer';

const initialState = {
  pants: 0,
  tshirts: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER_PANTS":
      return { ...state, pants: state.pants + 1 };
    case "ORDER_TSHIRTS":
      return { ...state, tshirts: state.tshirts + 1 };
    case "EMPTY_CART":
      return { pants: 0, tshirts: 0 };
    default:
      return state;
  }
}

/*
const store = createStore(cartReducer);
store.dispatch({ type: "ORDER_PANTS" })
console.log(store.getState())
*/

/* Övning 1
initialState = [] 
skapa en store med en reducer (arrayReducer)
"ADD_ONE" => [1]
"ADD_ONE" => [1, 1]
"ADD_ONE" => [1, 1, 1]
"REMOVE" => [1, 1]
"EMPTY" => []
*/

const arrayReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ONE":
      return [...state, 1]
    case "REMOVE":
      return state.slice(0, -1)
    case "EMPTY":
      return [];
    default:
      return state;
  }
}
/*
const store = createStore(arrayReducer);

store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch({ type: "ADD_ONE" })
store.dispatch({ type: "ADD_ONE" })
store.dispatch({ type: "ADD_ONE" })
store.dispatch({ type: "REMOVE" })
store.dispatch({ type: "EMPTY" })
*/

/* Övning 2
initialState = [] 
skapa en store med en reducer (letterReducer)
"ADD_A" => ["A"]
"ADD_B" => ["A", "B"]
"ADD_C" => ["A", "B", "C"]
"REMOVE_LAST" => ["A", "B"]
"REMOVE_FIRST" => ["B"]
*/

/*
const store = createStore(letterReducer);
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: "ADD_A" })
store.dispatch({ type: "ADD_B" })
store.dispatch({ type: "ADD_C" })
store.dispatch({ type: "REMOVE_LAST" })
store.dispatch({ type: "REMOVE_FIRST" })
*/
const store = createStore(counterReducer);
const domElement = document.getElementById('root');

const root = ReactDOM.createRoot(domElement);

const renderApp = () => root.render(
  <App store={store} />
);

renderApp();
store.subscribe(renderApp)