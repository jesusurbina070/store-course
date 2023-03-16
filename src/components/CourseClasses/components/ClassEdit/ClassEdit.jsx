import React from "react";
import { useEditCourse } from "../../../../pages/EditCourse/context/editCourse.context";

function ClassEdit({ classData }) {
  const { classForm, setEditClass } = useEditCourse();
  const { setValue } = classForm;

  const handleEdit = (data) => {
    const dataValues = Object.entries(data)
    dataValues.map(([key, value]) => {
      setValue(key, value)
    })
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

export default ClassEdit;
