import { Fragment } from 'react';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
    return (
        <Fragment>
        <button className={classes.button}>
            <div className={classes.icon}>
                <CartIcon classes={classes}/>
            </div>
            <div>Twój koszyk</div>
            <div className={classes['cart-content']}>0</div>
        </button>
        </Fragment>
    );
}
 
export default HeaderCartButton;