import classes from './HeaderImage.module.css'
import mealsImage from '../../../assets/header.jpg'
const HeaderImage = () => {
    return ( 
        <div className={classes['header-image']}>
                <img src={mealsImage} alt="Zdjęcie posiłków" /> 
            </div>
     );
}
 
export default HeaderImage;