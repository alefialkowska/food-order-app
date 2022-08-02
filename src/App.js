import './style/App.css'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <Header />
      <Main /> 
      <Cart />  
    </div>
  );
}

export default App;
