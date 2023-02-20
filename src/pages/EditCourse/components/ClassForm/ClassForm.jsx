import React from "react";
import { useForm } from "react-hook-form";
import {
  createClass,
  updateClass,
} from "../../../../services/firebase.courses.services";
import { useEditCourse } from "../../context/editCourse.context";


function ClassForm() {
  const { modules, course, classForm, editClass, setEditClass } =
    useEditCourse();

 
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    setValue,
    resetField,
  } = classForm;

  const handleCreateClassForm = (data) => {
    console.log(data);
    createClass(course.id, data);
  };

  const handleEditClassForm = (data) => {
    updateClass(course.id, data);
    setEditClass(false);
    resetField("name");
    resetField("duration");
    resetField("description");
    resetField("position");
    resetField("id");
    resetField("moduleId");
  };
  return (
    <form
      onSubmit={
        editClass
          ? handleSubmit(handleEditClassForm)
          : handleSubmit(handleCreateClassForm)
      }
    >
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="name"
      />
      <input
        {...register("duration", { required: true })}
        type="text"
        placeholder="duración"
      />
      <input
        {...register("position", { required: true })}
        type="text"
        placeholder="numero de la clase"
      />
      <input
        {...register("description", { required: true })}
        type="text"
        placeholder="descripción"
      />
      <input
        {...register("url", { required: true })}
        type="text"
        placeholder="link del video"
      />
      {!editClass && (
        <select {...register("moduleId", { required: true })}>
          <option value="">--Selecciona el Modulo--</option>
          {modules?.map((module) => (
            <>
              <option key={module.name} value={module.id}>
                {module.name}
              </option>
            </>
          ))}
        </select>
      )}
      <button>{editClass ? "editar" : "añadir"}</button>
    </form>
  );
}

export default ClassForm;
