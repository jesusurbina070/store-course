import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ButtonAuth from "./components/ButtonAuth";
import "./FormAuth.scss";
import { context } from "../../context/authContext";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid'

function FormAuth({
  children,
  title,
  handleSubmit,
  showButton,
  handleAuth,
  links,
  buttonName,
  loading,
  titleClassName,
}) {
  const { handleClickGoogleAuth } = useContext(context);

  return (
    <section className="formAuth">
      <h2 className={titleClassName}>Nombre</h2>
      <form className="formAuth__form" onSubmit={handleSubmit(handleAuth)}>
        <h2 className="formAuth__title">{title}</h2>
        <div className="formAuth__inputsContainer">{children}</div>
        <div className="formAuth__buttonsContainer">
          <div className="formAuth__linkrow">
            {links.map(({ style, name, path }) => {
              return (
                <Link key={uuidv4()} to={path} className={style}>
                  {name}
                </Link>
              );
            })}
          </div>
          {showButton ? (
            <div className="formAuth__buttonrow">
              <ButtonAuth
                classbutton={"formAuth__button gmail"}
                typeButton="button"
                name="Google"
                spinnerClassName="child"
                handleClick={handleClickGoogleAuth}
              />
              <ButtonAuth
                classbutton="formAuth__button"
                name={buttonName}
                spinnerClassName={null}
                handleClick={null}
                loading={loading}
              />
            </div>
          ) : (
            <ButtonAuth
              classbutton="formAuth__button reset"
              name="Enviar"
              spinnerClassName={null}
              handleClick={null}
              loading={loading}
            />
          )}
        </div>
      </form>
    </section>
  );
}

export default FormAuth;
