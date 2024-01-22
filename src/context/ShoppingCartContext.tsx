import { ReactNode, createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: number | undefined;
  quantity: number;
}

interface ShoppingCartContext {
  getItemQuantity: (id: number | undefined) => number;
  increaseCartQuantity: (id: number | undefined) => void;
  decreaseCartQuantity: (id: number | undefined) => void;
  removeFromCart: (id: number | undefined) => void;
  cartQuantity: number;
  cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    [],
  );

  const getItemQuantity = (id: number | undefined) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number | undefined) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            if (item.quantity >= 10)
              return { ...item, quantity: item.quantity };
            else return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number | undefined) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number | undefined) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
