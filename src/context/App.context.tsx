import React from "react";
import { Book } from "../interfaces/books";

export type AppContextType = {
  cart: Book[];
  addToCart: (book: Book) => void;
  removeCartItem: (book: Book) => void;
};

const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = React.useState<Book[]>([]);

  const addToCart = (book: Book) => {
    setCart([...cart, book]);
  };

  const removeCartItem = (book: Book) => {
    setCart(cart.filter((c) => c.id !== book.id));
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, removeCartItem }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider, useAppContext };
