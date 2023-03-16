import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const initialUser = {
  name: "",
  email: "",
  rol: "studient",
  courses: [],
  orders: [],
};

export const setNewUser = async (userData) => {
  try {
    const newUser = { ...initialUser, ...userData };
    console.log(newUser);
    setDoc(doc(db, "users", newUser.uid), newUser);
  } catch (err) {
    console.log(err);
  }
};

export const getUserData = (uid) => getDoc(doc(db, "users", uid));
