import React, { useState, useRef, useEffect } from "react";
import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../../Firebase/firebase";
import { CgChevronDown } from "react-icons/cg";
import { unSetUser } from "../../../../reducers/user/userSlice";

function User() {
  const [open, setOpen] = useState(false);
  const downRef = useRef();
  const buttonRef = useRef();
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDropdown = (e) => {
    e.stopPropagation();
    setOpen((state) => !state);
  };

  const signOut = () => {
    dispatch(unSetUser());
    logOut();
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== downRef.current && e.target !== buttonRef.current) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <div className="User">
      <figure className="User__imgContainer">
        <img className="User__image" src="" alt="" />
      </figure>
      <p className="User__name">{name}</p>
      <span className="User__dropdown" onClick={handleDropdown} ref={downRef}>
        <CgChevronDown />
      </span>

      {open ? (
        <ul className="User__ul" ref={buttonRef}>
          <li>
            <button className="User__button" onClick={signOut}>
              Sign Out
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default User;
