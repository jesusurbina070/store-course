import React from "react";
import Spinner from "../../Spinner/Spinner";
import { FaGoogle } from "react-icons/fa";

function ButtonAuth({ classbutton, name, typeButton, spinnerClassName, handleClick, loading }) {
  return (
    <>
      {loading ? (
        <button className={classbutton} disabled>
          <Spinner name={spinnerClassName}/>
        </button>
      ) : (
        <button className={classbutton} type={typeButton} onClick={handleClick}>
            {name}
        </button>
      )}
    </>
  );
}

export default ButtonAuth;
