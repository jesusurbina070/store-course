import React from "react";
import { useForm } from "react-hook-form";
import { createModule, updateModule } from "../../../../services/firebase.courses.services";
import { useEditCourse } from "../../context/editCourse.context";

function ModuleForm() {
  const { course, moduleForm, editModule, setEditModule, } = useEditCourse();

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    resetField
  } = moduleForm;

  const HandleCreateModuleForm = (data) => {
    createModule(course.id, data.name);
  };

  const HandleEditModuleForm = (data) => {
    updateModule(course.id, data);
    resetField("name")
    resetField("id")
    setEditModule(false)
  };

  return (
    <form
      onSubmit={
        editModule
          ? handleSubmit(HandleEditModuleForm)
          : handleSubmit(HandleCreateModuleForm)
      }
    >
      <h3>Agrega un modulo</h3>
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="Nombre del modulo"
      />
      <button>{editModule ? "editar" : "añadir"}</button>
    </form>
  );
}

export default ModuleForm;
