import classes from './MealAddForm.module.css'

const MealAddForm = () => {
    return ( <
        form className = {
            classes.form
        } >
        <
        label className = {
            classes.label
        }
        htmlFor = 'input' > ilość < /label> <
        input type = 'number'
        name = 'input'
        className = {
            classes.input
        } > < /input> <
        button > +dodaj < /button> <
        /form>
    );
}

export default MealAddForm;