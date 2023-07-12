import React from "react";
import { useCourseView } from "../../context/CourseViewContext";
import Module from "../Module/Module";
import "./Modules.scss";
import AddButton from "../AddButton/AddButton";
import { useSelector } from "react-redux";

function Modules() {
  const { course, modules, classes, isBought } = useCourseView();
  console.log(isBought);

  return (
    <section className="Modules">
      {modules
        ?.sort((a, b) => a.position - b.position)
        .map((module) => (
          <Module module={module} classes={classes} />
        ))}
      {isBought ? null : (
        <AddButton id={course?.id} style={"AddButton other"} />
      )}
    </section>
  );
}

export default Modules;
