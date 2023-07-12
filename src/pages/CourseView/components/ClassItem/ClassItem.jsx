import React from "react";
import { FaEye, FaLock } from "react-icons/fa";
import "./ClassItem.scss";
import { useSelector } from "react-redux";
import { useCourseView } from "../../context/CourseViewContext";

function ClassItem({ item }) {
  const { rol } = useSelector((state) => state.user);
  const { isBought } = useCourseView();
  const { name, duration, position } = item;
  return (
    <article className="ClassItem">
      <span className="ClassItem__position">{position < 10 ? `0${position}` : position}</span>
      <p className="ClassItem__name">{name}</p>
      <span className="ClassItem__duration">{duration}</span>
      <div className="ClassItem__vector">
        {isBought || rol === "admin" ? <FaEye /> : <FaLock />}
      </div>
    </article>
  );
}

export default ClassItem;
