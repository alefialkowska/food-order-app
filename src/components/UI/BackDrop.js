
const BackDrop = props => {
    return ( 
        <div onClick={props.hideCart} className={props.classes.backdrop}></div>
     );
}
 
export default BackDrop;