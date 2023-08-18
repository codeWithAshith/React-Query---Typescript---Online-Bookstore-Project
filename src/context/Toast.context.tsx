import React, { useState } from "react";
import ToastComponent from "../components/utils/Toast.component";
import { CONSTANT } from "../constants";

export type ToastContextType = {
  showToast: (message: string, variant?: string) => void;
  removeToast: () => void;
};

interface State {
  message: string;
  variant: string;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

const INITIAL_STATE = {
  message: "",
  variant: "default",
};

const ToastProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<State>(INITIAL_STATE);

  const showToast = (message: string, variant = CONSTANT.DEFAULT) => {
    setToastMessage({ message, variant });
  };

  const removeToast = () => setToastMessage(INITIAL_STATE);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      <ToastComponent
        message={toastMessage.message}
        variant={toastMessage.variant}
        onClose={removeToast}
      />
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  return React.useContext(ToastContext) as ToastContextType;
};

export { ToastProvider, useToast };
