import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import Button from "../../Components/Button";
import { useNavigate } from "react-router";

const SigninForm = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [password, setPassword] = useState(null);
  const [isPassValid, setIsPassValid] = useState(false);

  const [rePassword, setRePassword] = useState(null);
  const [isRePassValid, setIsRePassValid] = useState(false);

  // const [error, setError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(e.target.value);
    validateEmail(newEmail) ? setIsEmailValid(true) : setIsEmailValid(false);
  };
  const handlePass = (e) => {
    const newPassword = e.target.value;
    setPassword(e.target.value);
    newPassword.length < 6 ? setIsPassValid(false) : setIsPassValid(true);
  };
  const handleRePass = (e) => {
    setRePassword(e.target.value);
    const newPassword = e.target.value;
    newPassword === password ? setIsRePassValid(true) : setIsRePassValid(false);
  };

  const navigate = useNavigate();
  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error is :" + errorMessage);
      });
  };

  return (
    <div>
      <form className="m-5">
        <div className="relative p-3">
          <div className="mb-4">
            <Button
              variant="default"
              size="default"
              className={`text-sm rounded-lg px-3 mr-3 ${
                isSignUpForm
                  ? "bg-neutral-700 hover:bg-neutral-700 text-white"
                  : null
              }`}
              onClick={() => setIsSignUpForm(true)}
            >
              SignUp
            </Button>
            <Button
              variant="default"
              size="default"
              className={`text-sm rounded-lg px-3 mr-3 ${
                isSignUpForm
                  ? null
                  : "bg-neutral-700 hover:bg-neutral-700 text-white "
              }`}
              onClick={() => setIsSignUpForm(false)}
            >
              SignIn
            </Button>
          </div>

          <div className="">
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmail(e)}
              required
              className={`w-full border-b focus:outline-none p-1 placeholder:text-black mb-4 ${
                isEmailValid ? "border-blue-500" : "border-red-500"
              }`}
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="text"
              value={password}
              onChange={(e) => handlePass(e)}
              className={`w-full border-b focus:outline-none p-1 placeholder:text-black mb-4 ${
                isPassValid ? "border-blue-500" : "border-red-500"
              }`}
              placeholder="Password"
              required
            />
          </div>

          <div>
            <input
              type="text"
              value={rePassword}
              onChange={(e) => handleRePass(e)}
              className={`w-full border-b focus:outline-none p-1 placeholder:text-black mb-4 ${
                isRePassValid ? "border-blue-500" : "border-red-500"
              } ${isSignUpForm ? "block" : "hidden"}`}
              placeholder="Re-enter Password"
              required
            />
          </div>

          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          <Button variant="dark" size="default" className="w-full mt-4">
            {isSignUpForm ? "SignUp" : "SignIn"}
          </Button>
          <div className="absolute inset-0 bg-neutral-600 z-10 opacity-70"></div>
          <div className="absolute inset-0 z-20 text-red-600 flex justify-center items-center ">
            {" "}
            Not available now
          </div>
        </div>
        <Button
          variant="default"
          size="default"
          className="w-full bg-blue-600 text-md text-white hover:bg-blue-500 mt-4"
          onClick={() => handleGoogleAuth()}
        >
          Signin using Google
        </Button>
      </form>
    </div>
  );
};

export default SigninForm;
