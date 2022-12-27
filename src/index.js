import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter} from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import productsReducer, {productsFetch} from './features/productsSlice';
import {productsApi} from "./features/productsApi";
import cartReducer, {getTotals} from "./features/cartSlice";

const store = configureStore({
  reducer:{
    products: productsReducer,
    cart:cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

