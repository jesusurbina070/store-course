import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const setNewUser = (userData) =>
  setDoc(doc(db, "users", userData.uid), userData);

export const getUserData = async (uid) => {
  const response =  await getDoc(doc(db, "users", uid));
  return { user: response.data(), exist: response.exists() };
};
