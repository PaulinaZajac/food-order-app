import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIdx = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const uptadedItems = [...state.items];

    if (existingCartItemIdx > -1) {
      const existingItem = state.items[existingCartItemIdx];

      const uptadedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      uptadedItems[existingCartItemIdx] = uptadedItem;
    } else {
      uptadedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: uptadedItems };
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIdx = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIdx];
    const uptadedItems = [...state.items];

    if (existingItem.quantity === 1) {
      uptadedItems.splice(existingCartItemIdx, 1);
    } else {
      const uptadedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      uptadedItems[existingCartItemIdx] = uptadedItem;
    }
    return { ...state, items: uptadedItems };
  }
  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log(cartContext.items.length);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
