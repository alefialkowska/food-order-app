import classes from './Checkout.module.css'
const Checkout = () => {
    return ( 
        <form action="">
            <div className={classes.control}>
            <label htmlFor='name'>Imię i Nazwisko</label>
            <input type="text" id='name' />
            </div>
            <div>
                <label htmlFor="street">Ulica</label>
                <input type="text" id='street' />
            </div>
            <div>
                <label htmlFor="number">Numer domu/mieszkania</label>
                <input type="number" id='number' />
            </div>
            <div>
                <label htmlFor="city">Miasto</label>
                <input type="text" id='city' />
            </div>
            <div>
                <label htmlFor="postalcode">Kod pocztowy</label>
                <input type="text" id='postalcode' />
            </div>postalcode
            
            <button>Zatwierdź</button>
        </form>
     );
}
 
export default Checkout;