import classes from './AvaliableMeals.module.css'
import Meal from './Meal'
import Wrapper from '../UI/Wrapper'

const AvaliableMeals = () => {

const data = require('../../assets/MealsList.json')
const ListOfMeals = data.meals.map(meal => {
    return (
        <Meal key={meal.id} meal={meal}/>
    ) 
})

    return ( 
        <ul className={classes.meals}>
            <Wrapper>
            {ListOfMeals}
            </Wrapper>
        </ul>

     );
}
 
export default AvaliableMeals;