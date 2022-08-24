import { Fragment, useContext, useState, useEffect} from 'react';
import { showCartActions } from '../store/showCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartContext from '../store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    const dispatch = useDispatch();
    const showCartState = useSelector(state => state.ui.showCart);
    const handleCartVisibility = () => {
        dispatch(showCartActions.toggleVisibility(showCartState))
    };


    const [bumpActive, setBumpActive] = useState(false);

    const ctx = useContext(CartContext);

    const numberOfItems = ctx.items.reduce(
        (currentNumber, item) => currentNumber + item.amount 
        , 0)

    const btnClasses = `${classes['cart-content']} ${bumpActive ? classes.bump : null}`

    const {totalAmount} = ctx;

    useEffect(() => {
        if (totalAmount === 0) {
            return
        }
        setBumpActive(true);
        const timer = setTimeout(() => {
                setBumpActive(false)
            }, 500);
        return () => {clearTimeout(timer)}
    }, [totalAmount]);

    return (
        <Fragment>
        <button onClick={handleCartVisibility} className={classes.button}>
            <div className={classes.icon}>
                <CartIcon classes={classes}/>
            </div>
            <div>Twój koszyk</div>
            <div className={btnClasses}>{numberOfItems}</div>
        </button>
        </Fragment>
    );
}
 
export default HeaderCartButton;