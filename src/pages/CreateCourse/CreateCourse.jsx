import { FormCreate, MultiSelect, DashboardNav, Header } from "../../components/";
import { Title, User } from "../../components/Header/components"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  createCourse,
  uploadCourseImage,
} from "../../services/firebase.courses.services";

function CreateCourse() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    setValue,
  } = useForm();

  const handleCreateCourseForm = async (data) => {
    console.log(data);
    createCourse(data);
  };

  const handleChange = (select) => {
    setValue("categories", select);
  };

  return (
    <>
      <Header>
        <Title title="Subir Usuario"/>
        <User />  
      </Header>
        <FormCreate
          buttonName="Añadir Curso"
          handleSubmit={handleSubmit}
          handleForm={handleCreateCourseForm}
        >
          <div className="FormCreate__courseinfo">
            <input
              className="FormCreate__input"
              {...register("name", {
                required: true,
              })}
              type="text"
              placeholder="Nombre del curso"
            />
            <MultiSelect
              setValue={setValue}
              register={register}
              type="categories"
            />
            <input
              className="FormCreate__input"
              {...register("price", {
                required: true,
              })}
              type="text"
              placeholder="Precio"
            />
            <textarea
              {...register("description", {
                required: true,
              })}
              className="FormCreate__input"
              placeholder="descripción del curso"
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
            />
          </div>
        </FormCreate>
    </>
  );
}

export default CreateCourse;
