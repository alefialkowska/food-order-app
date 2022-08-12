import classes from './MealAddForm.module.css'
import { useState, useContext } from 'react';
import CartContext from '../store/CartContext';

const MealAddForm = ({meal}) => {

    const context = useContext(CartContext);
  const [formState, setFormState] = useState('')

  const handleAmountChange = e => {
    setFormState(e.target.value)
  }
    const handleSubmitForm = e => {
        e.preventDefault();
        const selectedAmount = formState
        if ( selectedAmount < 1 || selectedAmount.trim().length === 0)
        return;
        context.addItem({
            id: meal.id,
            price: meal.price,
            name: meal.name,
            amount: +selectedAmount,
        });
        setFormState(0);


    } 

    return (
        <form className={classes.form} onSubmit={handleSubmitForm}>
            <label htmlFor={meal.id} className={classes.label}>ilość</label>
            <input value={formState} onChange={handleAmountChange} type="number" min={0} max={5} id={meal.id} className={classes.input}/>
            <button type='submit' className={classes.button}>+ dodaj</button>
        </form>
    );
}

export default MealAddForm;
