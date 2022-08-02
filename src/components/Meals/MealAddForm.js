import classes from './MealAddForm.module.css'

const MealAddForm = ({meal}) => {
    return (
        <form className={classes.form}>
            <label htmlFor={meal.id} className={classes.label}>ilość</label>
            <input type="number" min={0} max={5} id={meal.id} className={classes.input}/>
            <button className={classes.button}>+ dodaj</button>
        </form>
    );
}

export default MealAddForm;
