
const CartContainer = props => {
    return ( 
        <div className={props.classes['cart-container']}>
            <div className={props.classes.content}>{props.children}</div>
        </div>
     );
}
 
export default CartContainer;