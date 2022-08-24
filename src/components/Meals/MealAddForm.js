import classes from './MealAddForm.module.css'
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { cartContentActions } from '../store/cartContentSlice';


const MealAddForm = ({meal}) => {

    const dispatch = useDispatch();
    const [formState, setFormState] = useState(0);

    const handleFormSumbit = e => {
        e.preventDefault();
        if (formState < 0) return;
        dispatch(cartContentActions.addItem({
            id: meal.id,
            price: meal.price, 
            name: meal.name,
            quantity: Number(formState),
        }))
        setFormState(0)
    };
    const handleAmountChange = e => {
        setFormState(e.target.value)
    };
    
    return (
        <form className={classes.form} onSubmit={handleFormSumbit}>
            <label htmlFor={meal.id} className={classes.label}>ilość</label>
            <input value={formState} onChange={handleAmountChange} type="number" min={0} max={5} id={meal.id} className={classes.input}/>
            <button type='submit' className={classes.button}>+ dodaj</button>
        </form>
    );
}

export default MealAddForm;
