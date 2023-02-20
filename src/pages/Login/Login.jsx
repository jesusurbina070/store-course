import React, { useState, useContext } from "react";
import FormAuth from "../../components/FormAuth/FormAuth";
import ContentAuth from "../../components/ContentAuth/ContentAuth";
import useAuth from "./hooks/useAuth";
import "./Login.scss";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
import { context } from "../../context/authContext";
import { signIn } from "../../Firebase/firebase";

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const NAME_PATTERN = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

function Login() {
  const { formRegister, handleRegister, registerAuth } = useContext(context);
  const [showPwd, setShowPwd] = useState(false);
  const [showPwdRepeat, setShowPwdRepeat] = useState(false);
  const { ToastContainer } = registerAuth;

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = formRegister;

  return (
    <div className="login">
      <ContentAuth />
      <FormAuth
        title={"Registrate"}
        isLogin={true}
        handleSubmit={handleSubmit}
        showButton={true}
        handleAuth={handleRegister}
        buttonName="Registrar"
        links={[
          {
            style: "formAuth__link register",
            name: "Iniciar sesión",
            path: "/login",
          },
        ]}
        loading={registerAuth.loading}
        offButton={false}
        titleClassName="formAuth__pageName"
      >
        <div>
          <label className="formAuth__label">
            <FaRegUser size="1rem" />
            <input
              className="formAuth__input"
              type="text"
              {...register("name", {
                required: true,
                maxLength: 18,
                pattern: NAME_PATTERN,
              })}
              placeholder="Nombre y Apellido"
            />
          </label>
          <p className="formAuth__errorMessage">
            {errors.name?.type === "required" && "Este campo es obligatorio"}
          </p>
          <p className="formAuth__errorMessage">
            {errors.name?.type === "pattern" &&
              "No puede tener caracteres especiales o números"}
          </p>
          <p className="formAuth__errorMessage">
            {errors.name?.type === "maxLength" &&
              "Debe tener menos de 18 caracteres"}
          </p>
        </div>
        <div>
          <label className="formAuth__label">
            <FaRegUser size="1rem" />
            <input
              {...register("email", { required: true, pattern: EMAIL_PATTERN })}
              className="formAuth__input"
              type="text"
              // name="email"
              placeholder="Correo@correo.com"
            />
          </label>
          <p className="formAuth__errorMessage">
            {errors.email?.type === "required" && "Este campo es obligatorio"}
          </p>
          <p className="formAuth__errorMessage">
            {errors.email?.type === "pattern" && "El correo es invalido"}
          </p>
        </div>
        <div>
          <label className="formAuth__label">
            <HiOutlineKey size="1.3rem" />
            <input
              {...register("password", { required: true, minLength: 6 })}
              className="formAuth__input"
              type={showPwd ? "text" : "password"}
              // name="password"
              placeholder="Contraseña"
            />
            <span className="formAuth__showPwd" onClick={() => showPwd ? setShowPwd(false) : setShowPwd(true) }>
              {showPwd ? (
                <AiOutlineEye size="1.3rem" />
              ) : (
                <AiOutlineEyeInvisible size="1.3rem" />
              )}
            </span>
          </label>
          <p className="formAuth__errorMessage">
            {errors.password?.type === "required" &&
              "Este campo es obligatorio"}
          </p>
          <p className="formAuth__errorMessage">
            {errors.password?.type === "minLength" &&
              "La contraseña debe tener mas de 6 caracteres"}
          </p>
        </div>
        <div>
          <label className="formAuth__label">
            <HiOutlineKey size="1.3rem" />
            <input
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
                validate: (value) => value === getValues("password"),
              })}
              className="formAuth__input"
              type={showPwdRepeat ? "text" : "password"}
              // name="repeatPassword"
              placeholder="Repetir Contraseña"
            />
            <span className="formAuth__showPwd" onClick={() => showPwdRepeat ? setShowPwdRepeat(false) : setShowPwdRepeat(true) }>
              {showPwdRepeat ? (
                <AiOutlineEye size="1.3rem" />
              ) : (
                <AiOutlineEyeInvisible size="1.3rem" />
              )}
            </span>
          </label>
          <p className="formAuth__errorMessage">
            {errors.confirmPassword?.type === "required" &&
              "Este campo es obligatorio"}
          </p>
          <p className="formAuth__errorMessage">
            {errors.confirmPassword?.type === "validate" &&
              "Las contraseñas no son iguales"}
          </p>
          <p className="formAuth__errorMessage">
            {errors.confirmPassword?.type === "minLength" &&
              "La contraseña debe tener mas de 6 caracteres"}
          </p>
        </div>
      </FormAuth>
      <ToastContainer />
    </div>
  );
}

export default Login;
