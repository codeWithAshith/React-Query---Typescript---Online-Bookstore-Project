import Lottie from "lottie-react";

import ButtonComponent from "../utils/Button.component";

import auth from "../../images/auth.json";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-16 py-8 bg-slate-100 rounded-3xl">
      <Lottie className="h-40" animationData={auth} loop={true} />
      <p className="text-3xl my-2">Login</p>
      <p className="text-sm text-slate-500">
        Please login using account detail bellow.
      </p>
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
      <p className="text-sm text-slate-500 mt-4">
        Not an User?{" "}
        <Link className="text-slate-900" to="/register">
          Register
        </Link>
      </p>
      <div>
        <ButtonComponent
          label="Login"
          onClick={() => navigate("/")}
          className="px-20 my-4"
        />
      </div>
    </div>
  );
};

export default LoginComponent;
