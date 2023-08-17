import React, { useState } from "react";
import ToastComponent from "../components/utils/Toast.component";

export type ToastContextType = {
  showToast: (message: string) => void;
  removeToast: () => void;
};

const ToastContext = React.createContext<ToastContextType | null>(null);

const ToastProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string>("");

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const removeToast = () => setToastMessage("");

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      <ToastComponent message={toastMessage} onClose={removeToast} />
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  return React.useContext(ToastContext) as ToastContextType;
};

export { ToastProvider, useToast };
