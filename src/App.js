import {useState} from 'react';
import './style/App.css';
import CartProvider from './components/store/CartProvider';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Cart from './components/Cart/Cart';

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCart = () => setCartIsVisible(true);
  const hideCart = () => setCartIsVisible(false);

  return (
    <CartProvider>
      <Header showCart={showCart}/>
      <Main /> 
      {cartIsVisible && <Cart hideCart={hideCart}/>}
    </CartProvider>
  );
}

export default App;
