import React from "react";
import { Book } from "../interfaces/books";

export type AppContextType = {
  cart: Book[];
  addToCart: (book: Book) => boolean;
  removeCartItem: (book: Book) => void;
  clearCart: () => void;
};

const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = React.useState<Book[]>([]);

  const addToCart = (book: Book) => {
    if (!cart.find((c) => c.id === book.id)) {
      setCart([...cart, book]);
      return true;
    }
    return false;
  };

  const removeCartItem = (book: Book) => {
    setCart(cart.filter((c) => c.id !== book.id));
  };

  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider value={{ cart, addToCart, removeCartItem, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return React.useContext(AppContext) as AppContextType;
};

export { AppProvider, useAppContext };
