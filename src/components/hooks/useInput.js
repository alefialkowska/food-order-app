import {useState} from 'react'

const useInput = (validation) => {
   
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validation(value);
    const showError = !isValid && isTouched;

    const handleInputChange = e => {
        setValue(e.target.value)
    }
    const handleInputBlur = () => {
        setIsTouched(true)
    }
    const reset = () => {
        setValue('');
        setIsTouched(false)
    }

    return {
        value,
        handleInputChange,
        handleInputBlur,
        isValid,
        showError,
        reset,
    }
}
 
export default useInput;