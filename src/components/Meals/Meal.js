import classes from './Meal.module.css'

const Meal = ({meal}) => {
    return ( 
        <li className={classes['single-meal']} id={meal.id}>
            <div>
            <h2>{meal.name}</h2>
            <p className={classes.description}>{meal.description}</p>
            </div>
            <p className={classes.price}>{meal.price}</p>
        </li>
     );
}
 
export default Meal;