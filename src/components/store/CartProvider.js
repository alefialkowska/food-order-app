import { useReducer } from 'react';
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
};
const CartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const exisitingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        let updatedItem;
        let updatedItems;
        if(exisitingItemIndex >= 0 ) {
            const exisitingItem = state.items[exisitingItemIndex];
            updatedItem = {
                ...exisitingItem,
                amount: action.item.amount + exisitingItem.amount
            };
            updatedItems = [...state.items];
            updatedItems[exisitingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
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