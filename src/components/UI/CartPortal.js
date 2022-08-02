import {Fragment} from 'react'
import ReactDOM from 'react-dom'
import BackDrop from './BackDrop'
import CartContainer from './CartContainer'
import classes from './CartPortal.module.css'

const portalDiv = document.getElementById('cartPortal')

const CartPortal= (props) => {
    return ( 
        <Fragment>
        {ReactDOM.createPortal(<BackDrop hideCart={props.hideCart} classes={classes}/>, portalDiv)}
        {ReactDOM.createPortal(<CartContainer classes={classes}>{props.children}</CartContainer>, portalDiv)}
        </Fragment>
     );
}
 
export default CartPortal;