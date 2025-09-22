import React from "react";
import { useSelector } from "react-redux";
import Button from "../../Components/Button";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../../utils/firebase";

const SignoutComp = ({ setShowSignoutComp }) => {
  const userData = useSelector((store) => store.user.userData);
  const navigate = useNavigate();
  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("sign");
        setShowSignoutComp(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log({ authOutput: auth, storeData: userData });

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-1 items-center justify-center">
        {userData && (
          <img
            src={userData?.photoURL}
            className="w-10 h-10 rounded-full"
            // alt="profilepic"
          />
        )}
        <p className="text-lg font-bold">
          {userData ? userData.displayName : null}
        </p>
        <p className="text-sm">
          {userData ? userData.email : "User not signed in"}
        </p>
      </div>
      <Button
        variant="dark"
        size="default"
        className="rounded-full w-full"
        onClick={() => handleClick()}
      >
        <p className="text-sm text-white">
          {auth.currentUser ? "SignOut" : "SignIn"}
        </p>
      </Button>
    </div>
  );
};

export default SignoutComp;
