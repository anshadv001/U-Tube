import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { auth, db } from "./../../utils/firebase";

export function useWatchHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    console.log(auth);
    

    const ref = collection(db, "users", user.uid, "history");
    const q = query(ref, orderBy("watchedAt", "desc"));
    

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHistory(list);
    });

    return () => unsubscribe();
  }, []);

  return history;
}