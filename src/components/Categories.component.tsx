import fiction from "../images/fiction.png";
import fantasy from "../images/fantasy.png";
import crime from "../images/crime.png";
import { useNavigate } from "react-router";

const CategoriesComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 m-8 gap-8">
      <div
        className="bg-yellow-100 h-52 flex flex-col p-10 hover:cursor-pointer"
        onClick={() => navigate("/shop")}
      >
        <img src={fiction} alt="logo" className="w-16 h-16 mb-4" />
        <p className="text-2xl tracking-widest font-medium text-slate-900">
          Fiction
        </p>
        <p className="text-slate-900 tracking-widest text-sm">
          Super Collection
        </p>
      </div>
      <div
        className="bg-purple-100 h-52 flex flex-col p-10 hover:cursor-pointer"
        onClick={() => navigate("/shop")}
      >
        <img src={fantasy} alt="logo" className="w-16 h-16 mb-4" />
        <p className="text-2xl tracking-widest font-medium text-slate-900">
          Fantasy
        </p>
        <p className="text-slate-900 tracking-widest text-sm">
          Special Collection
        </p>
      </div>
      <div
        className="bg-green-100 h-52 flex flex-col p-10 hover:cursor-pointer"
        onClick={() => navigate("/shop")}
      >
        <img src={crime} alt="logo" className="w-16 h-16 mb-4" />
        <p className="text-2xl tracking-widest font-medium text-slate-900">
          Crime
        </p>
        <p className="text-slate-900 tracking-widest text-sm">
          Best Collection
        </p>
      </div>
    </div>
  );
};

export default CategoriesComponent;
