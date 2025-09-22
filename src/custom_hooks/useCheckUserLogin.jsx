// useCheckUserLogin.js
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowSignupModalTrue } from "../utils/ReduxStore/userSlice";

export const useCheckUserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((store) => store.user.userData);

  const checkUserLogin = (navigateTo, item) => {
    if (!isLogin) {
      dispatch(setShowSignupModalTrue());
    } else {
      navigate(navigateTo, { state: { item } });
    }
  };

  return checkUserLogin;
};
