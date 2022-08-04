import { useContext } from 'react'
import classes from './Cart.module.css'
import CartPortal from '../UI/CartPortal'
import CartContext from '../store/CartContext'
import CartItem from './CartItem'

const Cart = props => {

const context = useContext(CartContext);
const totalAmount = `${context.totalAmount.toFixed(2)}zł`;
const isCartEmpty = context.items.length < 1;
const handleAddItem = item => {};
const handleRemoveItem = id => {};

const cartMeals = (
    <ul className={classes['cart-items']}>
        {context.items.map( item => (
            <CartItem 
            key={item.id} 
            item={item} 
            handleRemoveItem={handleRemoveItem.bind(null, item.id)} 
            handleAddItem={handleAddItem.bind(null, item)}/>
        ))}
    </ul>
)

    return ( 
        <CartPortal hideCart={props.hideCart}>
            {cartMeals}
            <div className={classes.total}>
                <span>Kwota zamówienia</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.hideCart} className={classes['button--alt']}>zamknij</button>
                {!isCartEmpty && <button className={classes.button}>zamów</button>}
                </div>
        </CartPortal>
     );
}
 
export default Cart;