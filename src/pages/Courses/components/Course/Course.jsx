import React from "react";
import "./Course.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa";

function Course({ data }) {
  const { rol } = useSelector((state) => state.user);
  const { image, categories, id, name, description, price } = data;
  return (
    <NavLink to={`/dashboard/courses/course/${id}`} className="Course__link">
      <article className="Course">
        <img
          className="Course__image"
          src={image?.url}
          alt=""
          width="150"
          height="150"
        />
        <div className="Course__row">
          <div className="Course__categorie">
            <div className="Course__doubt"></div>
            <p>{categories[0]}</p>
          </div>
          {rol === "studient" && <p className="Course__price">{price}$</p>}
          {rol !== "studient" && (
            <NavLink to={`/dashboard/courses/edit-course/${id}`} className="Course__pencil">
              <FaPencilAlt />
            </NavLink>
          )}
        </div>
        <h3 className="Course__name">{name}</h3>
        <p className="Course__description">{description}</p>
      </article>
    </NavLink>
  );
}

export default Course;
