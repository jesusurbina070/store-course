import React from "react";
import { useSelector } from "react-redux";
import "./AddButton.scss";
import { NavLink } from "react-router-dom";
import { addCourse } from "../../../../services/firebase.courses.services";

function AddButton({ id, style }) {
  const { uid, rol } = useSelector((state) => state.user);
  return (
    <>
      {rol === "studient" ? (
        <button onClick={() => addCourse(uid, id)} className={style}>Agregar Curso</button>
      ) : (
        <NavLink to={`/dashboard/courses/edit-course/${id}`} className={style}>
          Editar Curso
        </NavLink>
      )}
    </>
  );
}

export default AddButton;
