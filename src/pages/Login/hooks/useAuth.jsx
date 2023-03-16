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
  const googleRegisterAuth = useFetch();
  const formRegister = useForm();
  const formLogin = useForm();
  const formResetPassword = useForm();
  const dispatch = useDispatch();
  const logInNavegate = useNavigate();

  const handleOnAuthChanged = async (currentUser) => {
    try {
      if (currentUser) {
        const response = await getUserData(currentUser.uid);
        dispatch(
          setUser({
            ...response?.data(),
          })
        );
      }
    } catch (err) { }
  };

  useEffect(() => {
    onAuthStateChanged(auth, handleOnAuthChanged);
  }, []);

  const handleRegister = async (data) => {
    try {
      const userCredential = await registerAuth.fetchingAuth(
        signup(data.email, data.password)
      );
      setNewUser({ ...data, uid: userCredential.user.uid });
    } catch { }
  };

  const handleLogin = async (data) => {
    try {
      const userCredential = await loginAuth.fetchingAuth(
        signIn(data.email, data.password)
      );
    } catch (err) { }
  };

  const handleResetPassword = async (data) => {
    await loginAuth.fetchingAuth(resetPassword(data.email));
  };

  const handleClickGoogleAuth = async () => {
    try {
      const userCredential = await googleRegisterAuth.fetchingAuth(
        authGoogle()
      );
    } catch (err) { }
  };

  return {
    registerAuth,
    loginAuth,
    formRegister,
    formResetPassword,
    formLogin,
    handleRegister,
    handleLogin,
    handleClickGoogleAuth,
    logInNavegate,
    handleResetPassword,
  };
}

export default useAuth;
