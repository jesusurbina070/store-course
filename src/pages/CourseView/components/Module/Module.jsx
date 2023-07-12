import React from "react";
import { FaLock } from "react-icons/fa";
import ClassItem from "../ClassItem/ClassItem";
import "./Module.scss";

function Module({ module, classes }) {
  return (
    <section className="Module">
      <div className="Module__titleContainer">
        <hr />
        <h2 className="Module__title">{module?.name}</h2>
      </div>
      <div className="Module__classes">
        {classes
          ?.sort((a, b) => a.position - b.position)
          .filter((c) => c.moduleId === module.id)
          .map((c) => (
            <ClassItem item={c} />
          ))}
      </div>
    </section>
  );
}

export default Module;
