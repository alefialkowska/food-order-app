import { useDispatch } from 'react-redux';
import { cartContentActions } from '../store/cartContentSlice';
import classes from './CartItem.module.css'

const CartItem = ({item}) => {
    const itemPrice = `${item.price.toFixed(2)}zł`;
    const dispatch = useDispatch();
    const handleAddItem = () => {
      dispatch(cartContentActions.addItem({
        id: item.id,
        price: item.price, 
        name: item.name,
        quantity: 1,
      }))
  };
  const handleRemoveItem = () => {
    dispatch(cartContentActions.removeItem(item.id))
  };

    return ( 
        <li className={classes['cart-item']}>
      <div>hghmg
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{itemPrice}</span>
          <span className={classes.amount}>x {item.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={handleRemoveItem}>−</button>
        <button onClick={handleAddItem}>+</button>
      </div>
    </li>
     );
}
 
export default CartItem;