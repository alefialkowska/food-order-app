import { useSelector } from 'react-redux';
import './style/App.css';
import CartProvider from './components/store/CartProvider';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
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
