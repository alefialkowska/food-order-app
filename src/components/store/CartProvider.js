import { useReducer } from 'react';
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
};
const CartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const uptadedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: uptadedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
}

const CartProvider = props => {

const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState)

const handleAddItem = item => {
    dispatchCartAction({
        type: 'ADD_ITEM', item: item
    })
};

const handleRemoveItem = id => {};

const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;