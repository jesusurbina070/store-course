import { useEffect, useState } from "react";
import {
  auth,
  signup,
  authGoogle,
  signIn,
  db,
  resetPassword,
} from "../../../Firebase/firebase";
import { async } from "@firebase/util";
import useFetch from "../../../hooks/useFetch";
import { useForm } from "react-hook-form";
import Login from "../Login";
import { onAuthStateChanged } from "firebase/auth";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../reducers/user/userSlice";
import { toast } from "react-toastify";
import { setNewUser, getUserData } from "../../../services/firebase.services";

const initialUser = {
  name: "",
  email: "",
  rol: "studient",
  courses: [],
  orders: [],
};

function useAuth() {
  const registerAuth = useFetch({
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  // const { error } = registerAuth;
  const loginAuth = useFetch({
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const { error } = loginAuth;
  const googleRegisterAuth = useFetch();
  const formRegister = useForm();
  const formLogin = useForm();
  const formResetPassword = useForm();
  const dispatch = useDispatch();
  const logInNavegate = useNavigate();

  const handleOnAuthChanged = async  (currentUser) => {
    if(currentUser){
      const userData = await getUserData(currentUser.uid)
      dispatch(
       setUser({
         ...userData.user
       })
      )
      logInNavegate("/dashboard")
    }
   
  };

  useEffect(() => {
    onAuthStateChanged(auth, handleOnAuthChanged) 
  }, []);

  const handleRegister = async (data) => {
    const { name, email, password } = data;
    try {
      const userCredential = await registerAuth.fetchingAuth(
        signup(email, password)
      );
      let { uid } = userCredential.user;
      let newUser = { ...initialUser, name, email, uid };
      await setNewUser(newUser);
    } catch {}

    // if (userCredential.user.uid) {
    //
    //   let newUser = { ...initialUser, name, email, uid };
    //   await setDoc(doc(db, "users", uid), newUser);
    // }
  };

  const handleLogin = async (data) => {
    console.log(data)
    const userCredential = await loginAuth.fetchingAuth(
      signIn(data.email, data.password)
    );
    // console.log(await userCredential.user.uid != undefined)
    // if(userCredential.user.uid){
    //   const dataUser = await fetchUser(userCredential.user.uid)
    //   dispatch(setUser({
    //     ...dataUser
    //   }))
    // }
  };

  const handleResetPassword = async (data) => {
    await loginAuth.fetchingAuth(resetPassword(data.email));
  };

  const handleClickGoogleAuth = async () => {
    const userCredential = await googleRegisterAuth.fetchingAuth(authGoogle());
    // if (userCredential.user.uid) {
    //   const userData = await fetchUser(userCredential.user.uid);
    //   if (!userData.exist) {
    //     let { uid, displayName, email } = userCredential.user;
    //     let newUser = { ...initialUser, name: displayName, email, uid };
    //     await setDoc(doc(db, "users", uid), newUser);
    //     dispatch(
    //       setUser({
    //         ...newUser,
    //       })
    //     );
    //     logInNavegate("/dashboard");
    //   }
    // }
  };

  return {
    registerAuth,
    loginAuth,
    formRegister,
    formResetPassword,
    handleRegister,
    handleLogin,
    handleClickGoogleAuth,
    formLogin,
    logInNavegate,
    handleResetPassword,
  };
}

export default useAuth;
