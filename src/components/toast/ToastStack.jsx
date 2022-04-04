import React from "react";
import "./toast.css";
import { useToast } from "../../context";
import Toast from "./Toast";

function ToastStack() {
  const { toastStack } = useToast();

  return (
    <div className="stc_toast_stack">
      {toastStack.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

export default ToastStack;
