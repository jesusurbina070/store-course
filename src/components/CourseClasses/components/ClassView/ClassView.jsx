import React from "react";
import { useEditCourse } from "../../../../pages/EditCourse/context/editCourse.context";

function ClassView({ classData }) {
  const { classForm, setEditClass } = useEditCourse();
  const { setValue } = classForm;

  const handleEdit = (data) => {
    setValue("name", data.name)
    setValue("duration", data.duration)
    setValue("description", data.description)
    setValue("position", data.position)
    setValue("id", data.id)
    setValue("moduleId", data.moduleId)
    setEditClass(true);
  };

  return (
    <div>
      <span>{classData.position}</span>
      <p>{classData.name}</p>
      <p>{classData.duration}</p>
      <button
        onClick={() => {
          handleEdit(classData);
        }}
      >
        editar
      </button>
    </div>
  );
}

export default ClassView;
