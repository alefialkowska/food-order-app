import { Fragment, useState, useEffect} from 'react';
import { showCartActions } from '../../store/showCartSlice'
import { useDispatch, useSelector } from 'react-redux';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    
    const dispatch = useDispatch();
    const showCartState = useSelector(state => state.ui.showCart);
    const totalQuantity = useSelector(state => state.cartContent.totalQuantity)
    const [bumpActive, setBumpActive] = useState(false);

    const btnClasses = `${classes['cart-content']} ${bumpActive ? classes.bump : null}`

    useEffect(() => {
        if (totalQuantity === 0) {
            return
        }
        setBumpActive(true);
        const timer = setTimeout(() => {
                setBumpActive(false)
            }, 500);
        return () => {clearTimeout(timer)}
    }, [totalQuantity]);

    const handleCartVisibility = () => {
        dispatch(showCartActions.toggleVisibility(showCartState))
    };

    return (
        <Fragment>
        <button onClick={handleCartVisibility} className={classes.button}>
            <div className={classes.icon}>
                <CartIcon classes={classes}/>
            </div>
            <div>Twój koszyk</div>
            <div className={btnClasses}>{totalQuantity}</div>
        </button>
        </Fragment>
    );
}
 
export default HeaderCartButton;