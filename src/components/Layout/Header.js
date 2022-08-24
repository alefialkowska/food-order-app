import {Fragment} from 'react'
import HeaderImage from './HeaderImage'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
    return ( 
        <Fragment>
            <header className={classes}>
                <h1>Restauracja</h1>
                <HeaderCartButton /> 
            </header>
            <HeaderImage />  
        </Fragment>
    );
}
 
export default Header;