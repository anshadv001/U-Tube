import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/ReduxStore/userSlice";

export default function AuthObserver() {
    const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        console.log({user : displayName});
        
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
      } else {
        dispatch(removeUser());
      }
    });
    }, []);
  
    return null;
  }
  