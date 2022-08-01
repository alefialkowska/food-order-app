import {Fragment} from 'react'
import AvaliableMeals from '../Meals/AvaliableMeals';
import MealsDescription from '../Meals/MealsInfo';

const Main = () => {
    return ( 
        <Fragment>
            <MealsDescription />
            <AvaliableMeals />
        </Fragment>
     );
}
 
export default Main;