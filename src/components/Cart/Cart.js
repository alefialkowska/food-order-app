import classes from './Cart.module.css'

const Cart = () => {
const cartMeals = (
    <ul className={classes['cart-items']}>
        <li>Zupa</li>
        <li>Spaghetti Bolognese</li>
    </ul>
)

    return ( 
        <div>
            {cartMeals}
            <div className={classes.total}>
                <span>Kwota zamówienia</span>
                <span>99.99zł</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>zamknij</button>
                <button className={classes.button}>zamów</button>
                </div>

        </div>
     );
}
 
export default Cart;