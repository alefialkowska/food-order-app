import classes from './Cart.module.css'
import CartPortal from '../UI/CartPortal'

const Cart = props => {
const cartMeals = (
    <ul className={classes['cart-items']}>
        <li>Zupa</li>
        <li>Spaghetti Bolognese</li>
    </ul>
)

    return ( 
        <CartPortal hideCart={props.hideCart}>
            {cartMeals}
            <div className={classes.total}>
                <span>Kwota zamówienia</span>
                <span>99.99zł</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.hideCart} className={classes['button--alt']}>zamknij</button>
                <button className={classes.button}>zamów</button>
                </div>
        </CartPortal>
     );
}
 
export default Cart;