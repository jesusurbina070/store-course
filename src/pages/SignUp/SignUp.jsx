import { useContext, useState } from "react";
import "./SignUp.css";
import ContentAuth from "../../components/ContentAuth/ContentAuth";
import FormAuth from "../../components/FormAuth/FormAuth";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { context } from "../../context/authContext";

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function SignUp() {
  const { formLogin, handleLogin, loginAuth } = useContext(context);
  const [showPwd, setShowPwd] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = formLogin;
  const { ToastContainer } = loginAuth;
  return (
    <div className="signup">
      <FormAuth
        title={"Iniciar Sesión"}
        showButton={true}
        handleSubmit={handleSubmit}
        handleAuth={handleLogin}
        links={[
          { style: "formAuth__link", name: "Registrarme", path:"/signup" },
          { style: "formAuth__link", name: "Olvide mi contrasena", path:"/login/resetPassword"},
        ]}
        buttonName="Iniciar Sesión"
        loading={loginAuth.loading}
        titleClassName="formAuth__pageName"
      >
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
      </FormAuth>
      <ContentAuth isLogin={true} />
      <ToastContainer />
    </div>
  );
}

export default SignUp;
