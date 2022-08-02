import classes from './Meal.module.css'
import MealAddForm from './MealAddForm'

const Meal = ({meal}) => {
    return ( 
        <li className={classes['single-meal']} id={meal.id}>
            <div>
            <h2>{meal.name}</h2>
            <p className={classes.description}>{meal.description}</p>
            </div>
            <p className={classes.price}>{`${meal.price.toFixed(2)}zł`}</p>
            <div>
            <MealAddForm meal={meal}/>
            </div>
        </li>
     );
}
 
export default Meal;