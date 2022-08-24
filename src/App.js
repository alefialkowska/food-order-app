import {useState} from 'react';
import { useSelector } from '@reduxjs/toolkit';
import './style/App.css';
import CartProvider from './components/store/CartProvider';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Cart from './components/Cart/Cart';

function App() {

  const showCartState = useSelector(state => state.ui.showCart);

  return (
    <CartProvider>
      <Header/>
      <Main /> 
      {showCartState && <Cart/>}
    </CartProvider>
  );
}

export default App;
