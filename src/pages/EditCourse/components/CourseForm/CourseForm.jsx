import { useForm } from "react-hook-form";
import {MultiSelect} from "../../../../components/";
import { updateCourse } from "../../../../services/firebase.courses.services";
import { useEditCourse } from "../../context/editCourse.context";

function CourseForm() {
  const { course } = useEditCourse();

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    setValue,
  } = useForm();

  const handleEditCourse = (data) => {
    updateCourse(course.id, data)
  };

  return (
    <form onSubmit={handleSubmit(handleEditCourse)}>
      <input
        {...register("name", {
          required: true,
        })}
        {...setValue("name", course?.name)}
        type="text"
        placeholder="Nombre del curso"
      />
      <input
        {...register("price", {
          required: true,

        })}
        {...setValue("price", course?.price)}
        type="text"
        placeholder="Precio"
      />
      <input
        {...register("description", {
          required: true,
        })}
        {...setValue("description", course?.description)}
        type="text"
        placeholder="descripción del curso"
      />
      <MultiSelect setValues={setValue} register={register} selectValues={course?.categories}/>
      <button>editar</button>
    </form>
  );
}

export default CourseForm;
