import React, { useEffect } from "react";
import { useToast } from "../../context";

function Toast({ toast }) {
  const { removeToast, setToastTimeout } = useToast();

  useEffect(() => {
    let timeout;
    if (!toast.set) {
      setToastTimeout(toast.id);

      timeout = setTimeout(() => {
        removeToast(toast.id);
      }, 2000);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`sui_toast stc_toast_fade ${
        toast.failure ? "sui_toast_danger" : "sui_toast_success"
      }`}
    >
      {toast.msg}
    </div>
  );
}

export default Toast;
