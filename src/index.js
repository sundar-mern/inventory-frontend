import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store'
import {Provider } from 'react-redux';
import axios from 'axios';
axios.defaults.baseURL="https://admin-panel-m0n5.onrender.com"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  //</React.StrictMode>
);