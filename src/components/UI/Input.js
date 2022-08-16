const Input = props => {   
    const isError = props.showError ? <p className={props.errorTextClassName}>{props.errorText}</p> : null;
    const classes = props.showError ? `${props.class} ${props.errorClass}` : props.class 
    return ( 
        <div className={classes}>
            <label htmlFor={props.id}>{props.text}</label>
            <input type={props.type} id={props.id} value={props.value} onChange={props.nameChange} onBlur={props.onBlur} error={props.error}/>
            {isError}
        </div>
     );
}
 
export default Input;