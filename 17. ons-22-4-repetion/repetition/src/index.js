import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App';
import pokemonsReducer from "./reducers/pokemonsReducer"

const store = createStore(pokemonsReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);