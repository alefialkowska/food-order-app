import classes from './AvaliableMeals.module.css'

const AvaliableMeals = () => {

const data = require('../../assets/MealsList.json')
const ListOfMeals = data.meals.map(meal => {
    return (
        <li key={meal.id}>
            <h2>{meal.name}</h2>
            <p>{meal.description}</p>
            <p>{meal.price}</p>
        </li>
    ) 
})

    return ( 
        <ul className={classes.meals}>
            {ListOfMeals}
        </ul>

     );
}
 
export default AvaliableMeals;