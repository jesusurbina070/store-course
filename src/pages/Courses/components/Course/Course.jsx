import React from "react";
import "./Course.scss";
import { NavLink } from "react-router-dom";

function Course({ data }) {
  const { image, categories, id, name, description } = data;
  return (
    <NavLink to={`/dashboard/course/${id}`} className="Course__link">
      <article className="Course">
        <img
          className="Course__image"
          src={image?.url}
          alt=""
          width="150"
          height="150"
        />
        <div className="Course__categorie">
          <div className="Course__doubt"></div>
          <p>{categories[0]}</p>
        </div>
        <h3 className="Course__name">{name}</h3>
        <p className="Course__description">{description}</p>
      </article>
    </NavLink>
  );
}

export default Course;
