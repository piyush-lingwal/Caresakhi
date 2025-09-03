import React, { createContext, useReducer, useContext, ReactNode, useState } from 'react';

// Types
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface State {
  items: CartItem[];
  itemCount: number;
}

type Action = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartContextType {
  state: State;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  successMessage: string | null;
}

// Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Reducer
const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let newItems;
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) => 
          index === existingItemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }
      return {
        ...state,
        items: newItems,
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0)
      };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: newItems,
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0)
      };
    }
    case 'UPDATE_QUANTITY': {
        const newItems = state.items.map(item => 
            item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ).filter(item => item.quantity > 0);
        return {
            ...state,
            items: newItems,
            itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0)
        };
    }
    case 'CLEAR_CART':
      return { items: [], itemCount: 0 };
    default:
      return state;
  }
};

// Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const initialState: State = { items: [], itemCount: 0 };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000); // Message disappears after 3 seconds
  };

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity: 1 } });
    showSuccessMessage(`Added "${item.name}" to cart!`);
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };
  
  const updateQuantity = (id: number, quantity: number) => {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity }});
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart, successMessage }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

