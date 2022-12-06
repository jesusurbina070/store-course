import React from "react";
import { Link } from "react-router-dom";
import "./FormAuth.scss"

function FormAuth({ children, handleSubmit, title, isLogin, buttonName }) {
  return (
    <section className="formAuth">
      <h2 className="formAuth__pageName">Nombre</h2>
      <form className="formAuth__form" onSubmit={handleSubmit}>
        <h2 className="formAuth__title">{title}</h2>
        <div className="formAuth__inputsContainer">{children}</div>
        <div className="formAuth__buttonsContainer">
          {isLogin ? (
            <Link className="formAuth__link" to={"/signup"}>
              iniciar sesión
            </Link>
          ) : (
            <>
              <Link className="formAuth__link">Registrarme</Link>{" "}
              <Link className="formAuth__link">Olvide mi contrasena</Link>
            </>
          )}
          <button className="formAuth__button">{buttonName}</button>
        </div>
      </form>
    </section>
  );
}

export default FormAuth;
