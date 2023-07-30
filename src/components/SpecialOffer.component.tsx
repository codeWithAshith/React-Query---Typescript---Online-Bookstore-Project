import Lottie from "lottie-react";
import offer from "../images/offer.json";
import ButtonComponent from "./utils/Button.component";
import { useNavigate } from "react-router";

const SpecialOfferComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[100vh] bg-slate-900">
      <Lottie className="flex-1" animationData={offer} loop={true} />
      <div className="flex-1 flex flex-col justify-center px-8">
        <p className="text-slate-50 text-3xl mb-6">Special Offers </p>
        <p className="text-red-500 text-6xl mb-4">Books 50% off now! </p>
        <p className="text-red-500 text-6xl mb-4">Don't miss such a deal! </p>
        <p className="text-slate-50 text-sm mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          voluptatum quas ipsam totam laudantium animi quaerat voluptatibus
          suscipit officiis nemo.
        </p>
        <ButtonComponent
          label="Explore"
          onClick={() => {
            navigate("/shop");
          }}
          className="px-16 text-2xl self-start"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default SpecialOfferComponent;
