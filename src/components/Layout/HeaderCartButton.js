import { Fragment, useContext} from 'react';
import CartContext from '../store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({showCart}) => {

    const ctx = useContext(CartContext);
    const numberOfItems = ctx.items.reduce(
        (currentNumber, item) => currentNumber + item.amount 
        , 0)

    return (
        <Fragment>
        <button onClick={showCart} className={classes.button}>
            <div className={classes.icon}>
                <CartIcon classes={classes}/>
            </div>
            <div>Twój koszyk</div>
            <div className={classes['cart-content']}>{numberOfItems}</div>
        </button>
        </Fragment>
    );
}
 
export default HeaderCartButton;