import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './style/App.css';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import Cart from './components/Cart/Cart';

function App() {

  const showCartState = useSelector(state => state.ui.showCart);

  return (
    <Fragment>
      <Header/>
      <Main /> 
      {showCartState && <Cart/>}
    </Fragment>

  );
}

export default App;
