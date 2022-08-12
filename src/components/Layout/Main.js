import {Fragment} from 'react'
import AvaliableMeals from '../Meals/AvaliableMeals';
import MainInfo from './MainInfo';

const Main = () => {
    return ( 
        <Fragment>
            <MainInfo />
            <AvaliableMeals />
        </Fragment>
     );
}
 
export default Main;