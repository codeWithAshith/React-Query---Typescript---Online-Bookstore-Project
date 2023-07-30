import { useNavigate } from "react-router";
import ButtonComponent from "./utils/Button.component";

const BannerComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-slate-100 flex flex-col justify-center items-center">
      <p className="text-6xl text-slate-900 mb-5">Knowledge is</p>
      <p className="text-6xl text-red-500 mb-5">Strength</p>
      <div className="w-10 h-1 bg-red-500 mb-5"></div>
      <p className="text-3xl text-slate-900 max-w-[50vw] mb-5 text-center">
        There are many variations of passages of Lorem Ipsum the majority have
        suffered alteration in some.
      </p>
      <ButtonComponent
        label="Explore"
        onClick={() => {
          navigate("/shop");
        }}
        className="px-16 text-2xl"
      />
    </div>
  );
};

export default BannerComponent;
