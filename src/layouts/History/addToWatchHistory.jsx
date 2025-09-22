import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "./../../utils/firebase";

export const addToWatchHistory = async (item) => {
  const user = auth.currentUser;
  if (!user) return;
  const now = new Date();
  const formattedDate = now.toDate().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const historyRef = doc(db, "users", user.uid, "history", item.id);
  try {
    await setDoc(historyRef, {
      ...item,
      watchedAt: serverTimestamp(),
      watchedDate : formattedDate
    });
  } catch (error) {
    console.error("Error adding to watch history:", error);
  }
};

// import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
// import { auth, db } from "./../../utils/firebase";

// export const addToWatchHistory = async (item) => {
//   const user = auth.currentUser;
//   if (!user) return;

//   const historyRef = doc(db, "users", user.uid, "history", item.id);
//   const history = collection(db, "users", user.uid, "history");
//   try {
//     await setDoc(historyRef, {
//       ...item,
//       watchedAt: serverTimestamp(),
//     });

//   } catch (error) {
//     console.error("Error adding to watch history:", error);
//   }
//   console.log({ "history": history });
// };
