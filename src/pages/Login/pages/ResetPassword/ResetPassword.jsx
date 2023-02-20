import { useContext } from "react";
import FormAuth from "../../../../components/FormAuth/FormAuth";
import { context } from "../../../../context/authContext";
import { FaRegUser } from "react-icons/fa";
import "./ResetPassword.scss"

function ResetPassword() {
  const { formResetPassword, handleResetPassword, loginAuth} = useContext(context);
  const {ToastContainer} = loginAuth;
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = formResetPassword;


  const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return (
    <div className="ResetPassword">
      <FormAuth
        title={"Recuperar contraseña"}
        isLogin={true}
        handleSubmit={handleSubmit}
        handleAuth={handleResetPassword}
        links={[{style: "formAuth__link register", name: "Regresar", path: "/login"}]}
        buttonName="enviar"
        loading={loginAuth.loading}
        showButton={false}
        titleClassName="formAuth__pageName left"
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
      </FormAuth>
      <ToastContainer />
    </div>
  );
}

export default ResetPassword;
