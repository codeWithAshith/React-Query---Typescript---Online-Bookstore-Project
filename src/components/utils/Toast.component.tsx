import React, { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiCheck, BiErrorAlt } from "react-icons/bi";

import useTimeout from "../../hooks/useTimeout";
import { CONSTANT } from "../../constants";

interface Props {
  message: string;
  variant?: string;
  onClose: () => void;
}

const ToastComponent: React.FC<Props> = ({
  message,
  variant = CONSTANT.DEFAULT,
  onClose,
}) => {
  const { reset } = useTimeout(() => onClose(), 3000);

  useEffect(() => {
    reset();
  }, [message]);

  return (
    <div className="relative">
      {message && variant === CONSTANT.DEFAULT && (
        <div className="animate-bounce drop-shadow-2xl fixed z-10 right-4 top-20 border border-red-500 bg-red-100 p-2 flex rounded-3xl px-4 items-center">
          <span className="mr-2 text-red-500">
            <BiErrorAlt />
          </span>
          <p className="text-red-600">{message}</p>
          <button className="ml-4" onClick={onClose}>
            <AiFillCloseCircle size={18} className="text-red-500" />
          </button>
        </div>
      )}
      {message && variant === CONSTANT.SUCCESS && (
        <div className="animate-bounce drop-shadow-2xl fixed z-10 right-4 top-20 border border-green-500 bg-green-100 p-2 flex rounded-3xl px-4 items-center">
          <span className="mr-2 text-green-500">
            <BiCheck />
          </span>
          <p className="text-green-600">{message}</p>
          <button className="ml-4" onClick={onClose}>
            <AiFillCloseCircle size={18} className="text-green-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ToastComponent;
