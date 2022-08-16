import classes from './Checkout.module.css'
import Input from '../UI/Input'
const Checkout = props => {

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log("form zatwierfzonysd")
    }
    return ( 
        <form onSubmit={handleFormSubmit} className={classes.form}>
            <Input class={classes.control} id='name' type='text' text='Imię i nazwisko'/>
            <Input class={classes.control} id='street' type='text' text='Ulica'/>
            <Input class={classes.control} id='number' type='text' text='Numer domu/mieszkania'/>
            <Input class={classes.control} id='city' type='text' text='Miasto'/>
            <Input class={classes.control} id='postalcode' type='text' text='Kod pocztowy'/>
            <div className={classes.actions}>
            <button onClick={props.onCloseForm} className={classes.close}>Anuluj</button>
            <button className={classes.submit}>Zatwierdź</button>
            </div>
        </form>
     );
}
 
export default Checkout;