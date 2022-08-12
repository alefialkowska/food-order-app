import classes from './CartItem.module.css'

const CartItem = ({item, handleRemoveItem, handleAddItem}) => {

    const itemPrice = `${item.price.toFixed(2)}zł`;

    return ( 
        <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{itemPrice}</span>
          <span className={classes.amount}>x {item.amount}</span>
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