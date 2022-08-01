import classes from './MealAddForm.module.css'

const MealAddForm = () => {
    return (
        <form className={classes.form}>
            <label htmlFor="input" className={classes.input}></label>
            <input type="number" name='input' className={classes.input}/>
            <button className={classes.button}>+ dodaj</button>
        </form>
    );
}

export default MealAddForm;
