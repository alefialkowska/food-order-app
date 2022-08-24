import { useDispatch, useSelector } from 'react-redux';
import { showCartActions } from '../store/showCartSlice';
import classes from './Cart.module.css';
import CartPortal from '../UI/CartPortal';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = () => {

    const dispatch = useDispatch();
    const showCartState = useSelector(state => state.ui.showCart);
    const items = useSelector(state => state.cartContent.items);
    const totalPrice = useSelector(state => state.cartContent.totalPrice)
    
    const handleCartVisibility = () => {
        dispatch(showCartActions.toggleVisibility(showCartState))
    };
    const handleOrderButton = () => {
        dispatch(showCartActions.toggleVisibility(showCartState)) 
    };
    const isCartEmpty = items.length < 1;

    const cartMeals = (
        <ul className={classes['cart-items']}>
            {items.map( item => (
                <CartItem 
                key={item.id} 
                item={item} 
                />
            ))}
        </ul>
    )

    const actions = (
    <div className={classes.actions}>
    <button onClick={handleCartVisibility} className={classes['button--alt']}>zamknij</button>
    {!isCartEmpty && <button className={classes.button} onClick={handleOrderButton}>zamów</button>}
    </div>
    );

    return ( 
        <CartPortal hideCart={handleCartVisibility}>
            {cartMeals}
            <div className={classes.total}>
                <span>Kwota zamówienia</span>
                <span>{totalPrice.toFixed(2)}</span>
            </div>
            {showCartState && <Checkout onCloseForm={handleCartVisibility}/>}
            {!showCartState && actions}
            
        </CartPortal>
     );
}
 
export default Cart;