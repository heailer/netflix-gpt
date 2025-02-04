import { useRef, useState } from "react";
import { backGroundImage } from "../utils/constants/images";
import Header from "./Header";
import { validatePassword } from "../utils/validators/passwordValidate";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const handleSignIn = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue);
    if (!emailValidate) {
      setErrorMessage("Please enter a valid email address");
    } else {
      const passwordValidate = validatePassword(passwordValue);
      if (!passwordValidate.isValid) {
        setErrorMessage(passwordValidate.error.join(", "));
      }
    }
  };
  const handleSignUp = () => {
    setErrorMessage("");
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue);
    if (nameValue.length < 3) {
      setErrorMessage("Name must be atleast 3 characters long");
    } else if (!emailValidate) {
      setErrorMessage("Please enter a valid email address");
    } else {
      const passwordValidate = validatePassword(passwordValue);
      if (!passwordValidate.isValid) {
        setErrorMessage(passwordValidate.error.join(", "));
      }
    }
  };
  const toggleSignInForm = () => {
    email.current.value = "";
    password.current.value = "";
    setErrorMessage("");
    setSignInForm(!signInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={backGroundImage} alt="Background" />
      </div>

      <div className="bg-[rgba(0,0,0,0.8)] absolute w-3/12 my-36 mx-auto left-0 right-0 p-12 text-white py-4 h-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-2xl my-6">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!signInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="my-3 p-3 w-full text-white rounded-sm border-1"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="my-3 p-3 w-full text-white rounded-sm border-1"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2 p-3 w-full text-white rounded-sm border-1"
          />
          <button
            className="p-3 my-4 bg-red-700 w-full rounded-sm"
            onClick={signInForm ? handleSignIn : handleSignUp}
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            {signInForm
              ? "New to Netflix? Sign up now."
              : "Already a member? Sign in now."}
          </p>
          <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};
export default Login;
