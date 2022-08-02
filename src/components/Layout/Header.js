import {Fragment} from 'react'
import HeaderImage from './HeaderImage'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = ({showCart}) => {
    return ( 
        <Fragment>
            <header className={classes}>
                <h1>Restauracja</h1>
                <HeaderCartButton showCart={showCart} /> 
            </header>
            <HeaderImage />  
        </Fragment>
    );
}
 
export default Header;