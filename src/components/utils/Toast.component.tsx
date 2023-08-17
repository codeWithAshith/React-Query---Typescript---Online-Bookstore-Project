import React, { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import useTimeout from "../../hooks/useTimeout";

interface Props {
  message: string;
  variant?: string;
  onClose: () => void;
}

const ToastComponent: React.FC<Props> = ({
  message,
  variant = "default",
  onClose,
}) => {
  const { reset } = useTimeout(() => onClose(), 3000);

  useEffect(() => {
    reset();
  }, [message]);

  return (
    <div className="relative">
      {message && (
        <div className="animate-bounce drop-shadow-2xl fixed z-10 right-4 top-20 border border-red-500 bg-red-100 p-2 flex rounded-3xl px-4">
          <span className="">{"icon" ? "" : ""}</span>
          <p className="text-red-600">{message}</p>
          <button className="ml-4" onClick={onClose}>
            <AiFillCloseCircle size={18} className="text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ToastComponent;
