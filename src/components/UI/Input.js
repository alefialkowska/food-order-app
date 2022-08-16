const Input = props => {   
    const isError = props.showError ? <p className={props.errorClassName}>{props.errorText}</p> : null
    return ( 
        <div className={props.class}>
            <label htmlFor={props.id}>{props.text}</label>
            <input type={props.type} id={props.id} value={props.value} onChange={props.nameChange} onBlur={props.onBlur} error={props.error}/>
            {isError}
        </div>
     );
}
 
export default Input;