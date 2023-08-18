import { useNavigate } from "react-router";
import Lottie from "lottie-react";

import ButtonComponent from "../utils/Button.component";
import empty from "../../images/animation_llgj379p.json";

const EmptyCartComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full my-16">
      <Lottie className="h-96" animationData={empty} loop={true} />
      <p className="text-5xl text-slate-950 mb-4">Cart is Empty</p>
      <ButtonComponent
        label="Continue Shopping"
        onClick={() => {
          navigate("/");
        }}
        className="p-4"
      />
    </div>
  );
};

export default EmptyCartComponent;
