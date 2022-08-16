const Input = props => {
    return ( 
        <div className={props.class}>
            <label htmlFor={props.id}>{props.text}</label>
            <input type={props.type} id={props.id} />
        </div>
     );
}
 
export default Input;