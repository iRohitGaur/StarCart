import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const ToastContext = createContext();

const useToast = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [toastStack, setToastStack] = useState([]);

  const sendToast = (message) => {
    setToastStack((t) => [
      ...t,
      { id: uuid(), msg: message, setTimeout: false },
    ]);
  };

  const removeToast = (id) => {
    console.log(toastStack);
    setToastStack((t) => t.filter((t) => t.id !== id));
  };

  const setToastTimeout = (id) => {
    setToastStack((t) => (t.id === id ? { ...t, setTimeout: true } : t));
  };

  return (
    <ToastContext.Provider
      value={{ toastStack, sendToast, removeToast, setToastTimeout }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export { ToastProvider, useToast };
