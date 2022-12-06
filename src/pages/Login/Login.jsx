import React, { useState } from "react";
import FormAuth from "../../components/FormAuth/FormAuth";
import ContentAuth from "../../components/ContentAuth/ContentAuth";
import useAuth from "./hooks/useAuth";
import "./Login.scss";

function Login() {
  const { handleSubmitAuth, error, loading, handleChange, formData } =
    useAuth();
  const { name, email, password, repeatPassword } = formData;

  return (
    <div className="login">
      <ContentAuth />
      <FormAuth
        handleSubmit={handleSubmitAuth}
        title={"Registrate"}
        isLogin={true}
        buttonName={"Registrarme"}
      >
        <input
          className="formAuth__input"
          type="text"
          name="name"
          placeholder="Nombre y Apellido"
          value={name}
          onChange={handleChange}
        />
        <input
          className="formAuth__input"
          type="email"
          name="email"
          placeholder="Correo@correo.com"
          value={email}
          onChange={handleChange}
        />
        <input
          className="formAuth__input"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />
        <input
          className="formAuth__input"
          type="password"
          name="repeatPassword"
          placeholder="Repetir Contraseña"
          value={repeatPassword}
          onChange={handleChange}
        />
      </FormAuth>
      {loading ? <p>...loading</p> : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default Login;
