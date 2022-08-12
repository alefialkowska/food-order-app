import classes from './AvaliableMeals.module.css'
import useFetch from '../hooks/useFetch'
import Meal from './Meal'
import Wrapper from '../UI/Wrapper'

const AvaliableMeals = () => {


const { meals, error, loading } = useFetch('https://food-order-app-data-b6ee7-default-rtdb.firebaseio.com/meals.json')

if(loading) {
    return (
    <section className={classes.loading}>
    <p>Loading...</p>
    </section>
    )
}
if(error){
    return (
        <section>
            <p>httpError</p>
        </section>
    )
}

const ListOfMeals = meals.map(meal => {
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