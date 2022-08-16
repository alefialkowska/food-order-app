const Input = props => {
    return ( 
        <div className={props.class}>
            <label htmlFor={props.id}>{props.text}</label>
            <input type={props.type} id={props.id} value={props.value} onChange={props.nameChange} onBlur={props.onBlur}/>
        </div>
     );
}
 
export default Input;