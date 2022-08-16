import classes from './Checkout.module.css'
import Input from '../UI/Input'
const Checkout = () => {
    return ( 
        <form action="">
            <Input class={classes.control} id='name' type='text' text='Imię i nazwisko'/>
            <Input class={classes.control} id='street' type='text' text='Ulica'/>
            <Input class={classes.control} id='number' type='text' text='Numer domu/mieszkania'/>
            <Input class={classes.control} id='city' type='text' text='Miasto'/>
            <Input class={classes.control} id='postalcode' type='text' text='Kod pocztowy<'/>
            <div>
            <button>Zatwierdź</button>
            <button>Anuluj</button>
            </div>
        </form>
     );
}
 
export default Checkout;