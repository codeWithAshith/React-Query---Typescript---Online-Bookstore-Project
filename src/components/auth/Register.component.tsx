import Lottie from "lottie-react";

import ButtonComponent from "../utils/Button.component";

import auth from "../../images/auth.json";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-16 py-8 bg-slate-100 rounded-3xl">
      <Lottie className="h-40" animationData={auth} loop={true} />
      <p className="text-3xl my-2">Register</p>
      <p className="text-sm text-slate-500">
        Please Register using account detail bellow.
      </p>{" "}
      <input
        className="p-2 m-1 w-96 mt-4 border rounded-3xl px-4"
        type="text"
        placeholder="Full Name"
      />
      <input
        className="p-2 m-1 w-96 mt-4 border rounded-3xl px-4"
        type="text"
        placeholder="Email"
      />
      <input
        className="p-2 m-1 w-96 mt-4 border rounded-3xl px-4"
        type="password"
        placeholder="Password"
      />
      <input
        className="p-2 m-1 w-96 mt-4 border rounded-3xl px-4"
        type="password"
        placeholder="Confrim Password"
      />
      <p className="text-sm text-slate-500 mt-4">
        Already a User?{" "}
        <Link className="text-slate-900" to="/login">
          Login
        </Link>
      </p>
      <div>
        <ButtonComponent
          label="Register"
          onClick={() => navigate("/login")}
          className="px-20 my-4"
        />
      </div>
    </div>
  );
};

export default RegisterComponent;
