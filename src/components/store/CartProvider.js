import { useReducer } from 'react';
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
};
const CartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        let updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        updatedTotalAmount = updatedTotalAmount.toFixed(2) * 1
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
    if (action.type === 'REMOVE') {
        const index = state.items.findIndex(item => item.id === action.id);
        const itemToRemove = state.items[index]
        let updatedTotalAmount = state.totalAmount - itemToRemove.price;
        updatedTotalAmount = updatedTotalAmount.toFixed(2) * 1
        let updatedItem;
        let updatedItems;
        if (itemToRemove.amount > 1) {
            updatedItem = {
                ...itemToRemove,
                amount: state.items[index].amount - 1
            }
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
        } else {
            updatedItems = [...state.items];
            updatedItems.splice(index,1)
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

const handleRemoveItem = id => {
    dispatchCartAction({
        type: 'REMOVE', id: id
    })
};

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