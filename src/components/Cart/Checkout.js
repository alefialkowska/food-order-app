import useInput from '../hooks/useInput'
import classes from './Checkout.module.css'
import Input from '../UI/Input'


const Checkout = props => {

    const nameValidation = (enteredName) => enteredName.trim().length >= 6 ;
    const streetValidation = (enteredName) => enteredName.trim().length > 6 ;
    const numberValidation = (enteredName) => enteredName.trim().length >= 1 ;
    const cityValidation = (enteredName) => enteredName.trim().length > 4;
    const postalCodeValidation = (enteredName) => enteredName.trim().length > 5 ;
    const phoneNumberValidation = (enteredName) => enteredName.trim().length > 6 ;


    const {
        value: nameValue,
        handleInputChange: nameInputChange,
        handleInputBlur: nameInputBlur,
        isValid: nameValid,
        showError: showNameInputError,
        reset: nameReset,
    } = useInput(nameValidation);

    const {
        value: streetValue,
        handleInputChange: streetInputChange,
        handleInputBlur: streetInputBlur,
        isValid: streetValid,
        showError: showStreetInputError,
        reset: streetReset,
    } = useInput(streetValidation);

    const {
        value: numberValue,
        handleInputChange: numberInputChange,
        handleInputBlur: numberInputBlur,
        isValid: numberValid,
        showError: showNumberInputError,
        reset: numberReset,
        } = useInput(numberValidation);

    const {
        value: cityValue,
        handleInputChange: cityInputChange,
        handleInputBlur: cityInputBlur,
        isValid: cityValid,
        showError: showCityInputError,
        reset: cityReset,
        } = useInput(cityValidation);

    const {
         value: postalCodeValue,
        handleInputChange: postalCodeInputChange,
        handleInputBlur: postalCodeInputBlur,
        isValid: postalCodeValid,
        showError: showPostalCodeInputError,
        reset: postalCodeReset,
        } = useInput(postalCodeValidation);

    const {
        value: phoneNumberValue,
        handleInputChange: phoneNumberInputChange,
        handleInputBlur: phoneNumberInputBlur,
        isValid: phoneNumberValid,
        showError: showPhoneNumberInputError,
        reset: phoneNumberReset,
    } = useInput(phoneNumberValidation);


    const handleFormSubmit = e => {
        e.preventDefault();
        if(nameValid && streetValid && numberValid && cityValid && postalCodeValid && phoneNumberValid){
            console.log([nameValue, streetValue, numberValue, cityValue, postalCodeValue, phoneNumberValue])
            nameReset();
            streetReset();
            numberReset();
            cityReset();
            postalCodeReset();
            phoneNumberReset();
        }   
    }
    return ( 
        <form onSubmit={handleFormSubmit} className={classes.form}>
            <Input 
            class={classes.control} 
            id='name' 
            type='text' 
            text='Imię i nazwisko' 
            value={nameValue} 
            nameChange={nameInputChange} 
            onBlur={nameInputBlur} 
            showError= {showNameInputError}
            errorText= 'Podaj poprawne imię i nazwisko!'
            errorClassName= 'error-text'
            />
            <Input 
            class={classes.control} 
            id='street' 
            type='text' 
            text='Ulica'
            value={streetValue} 
            nameChange={streetInputChange} 
            onBlur={streetInputBlur} 
            showError= {showStreetInputError}
            errorText= 'Podaj poprawne miasto!'
            errorClassName= 'error-text'
            />
            <Input 
            class={classes.control} 
            id='number' 
            type='text' 
            text='Numer domu/mieszkania'
            value={numberValue} 
            nameChange={numberInputChange} 
            onBlur={numberInputBlur} 
            showError= {showNumberInputError}
            errorText= 'Podaj poprawny numer domu/mieszkania!'
            errorClassName= 'error-text'
            />
            <Input 
            class={classes.control} 
            id='city' 
            type='text' 
            text='Miasto'
            value={cityValue} 
            nameChange={cityInputChange} 
            onBlur={cityInputBlur} 
            showError= {showCityInputError}
            errorText= 'Podaj poprawne miasto!'
            errorClassName= 'error-text'
            />
            <Input 
            class={classes.control} 
            id='postalcode' 
            type='text' 
            text='Kod pocztowy'
            value={postalCodeValue} 
            nameChange={postalCodeInputChange} 
            onBlur={postalCodeInputBlur} 
            showError= {showPostalCodeInputError}
            errorText= 'Podaj poprawny kod pocztowy!'
            errorClassName= 'error-text'
            />
            <Input 
            class={classes.control} 
            id='phoneNumber' 
            type='text' 
            text='Numer telefonu'
            value={phoneNumberValue} 
            nameChange={phoneNumberInputChange} 
            onBlur={phoneNumberInputBlur} 
            showError= {showPhoneNumberInputError}
            errorText= 'Podaj poprawny numer telefonu!'
            errorClassName= 'error-text'
            />
            <div className={classes.actions}>
            <button onClick={props.onCloseForm} className={classes.close}>Anuluj</button>
            <button className={classes.submit}>Zatwierdź</button>
            </div>
        </form>
     );
}
 
export default Checkout;