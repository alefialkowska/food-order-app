import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from '@reduxjs/toolkit';
import store from './components/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
