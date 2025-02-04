import { useState } from "react";
import { backGroundImage } from "../utils/constants/images";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={backGroundImage} alt="Background" />
      </div>

      <div className="bg-[rgba(0,0,0,0.8)] absolute w-3/12 my-36 mx-auto left-0 right-0 p-12 text-white py-4 h-1/2">
        <form>
          <h1 className="font-bold text-2xl my-6">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!signInForm && (
            <input
              type="text"
              placeholder="Name"
              className="my-3 p-3 w-full text-white rounded-sm border-1"
            />
          )}

          <input
            type="text"
            placeholder="Email or mobile number"
            className="my-3 p-3 w-full text-white rounded-sm border-1"
          />
          <input
            type="password"
            placeholder="Password"
            className="my-2 p-3 w-full text-white rounded-sm border-1"
          />
          <button className="p-3 my-4 bg-red-700 w-full rounded-sm">
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          <p1 className="cursor-pointer" onClick={toggleSignInForm}>
            {signInForm
              ? "New to Netflix? Sign up now."
              : "Already a member? Sign in now."}
          </p1>
        </form>
      </div>
    </div>
  );
};
export default Login;
