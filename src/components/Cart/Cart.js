import { useContext, useState } from 'react'
import classes from './Cart.module.css'
import CartPortal from '../UI/CartPortal'
import CartContext from '../store/CartContext'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = props => {

    const [isFormActive, setIsFormActive] = useState(false);

    const context = useContext(CartContext);
    const totalAmount = `${context.totalAmount.toFixed(2)}zł`;
    const isCartEmpty = context.items.length < 1;
    const handleAddItem = item => {
        context.addItem({...item, amount: 1})
    };
    const handleRemoveItem = id => {
        context.removeItem(id)
    };
    const handleOrderButton = () => {
        setIsFormActive(true)
    };
    const handleClosingForm = () => {
        setIsFormActive(false)
    }

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

    const actions = (
    <div className={classes.actions}>
    <button onClick={props.hideCart} className={classes['button--alt']}>zamknij</button>
    {!isCartEmpty && <button className={classes.button} onClick={handleOrderButton}>zamów</button>}
    </div>
    );

    return ( 
        <CartPortal hideCart={props.hideCart}>
            {cartMeals}
            <div className={classes.total}>
                <span>Kwota zamówienia</span>
                <span>{totalAmount}</span>
            </div>
            {isFormActive && <Checkout onCloseForm={handleClosingForm}/>}
            {!isFormActive && actions}
            
        </CartPortal>
     );
}
 
export default Cart;