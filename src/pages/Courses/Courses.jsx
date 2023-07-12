import { collection, query, where } from "firebase/firestore";
import React from "react";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { NavLink, useSearchParams } from "react-router-dom";
import { FilterBar, Header } from "../../components";
import { Search, Title, User } from "../../components/Header/components";
import { db } from "../../Firebase/firebase";
import CoursesList from "./components/CoursesList/CoursesList";
import "./Courses.scss";
import { useSelector } from "react-redux";

const categoriesValue = [
  { name: "Programacion", value: "Programacion", },
  { name: "Audio Visual", value: "Audio Visual" },
  { name: "Marketing", value: "Marketing" },
  { name: "Diseño", value: "Diseño" },
];

function Courses() {
  const { rol } = useSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const { categories, search } = Object.fromEntries([...searchParams]);
  const coursesRef = !!categories
    ? query(
        collection(db, `courses`),
        where("categories", "array-contains", categories)
      )
    : collection(db, `courses`);
  const [data, loading, error] = useCollectionData(coursesRef);
  return (
    <>
      <Header>
        <Title title="Cursos" />
        <Search
          placeholder={"Encontrar cursos"}
          mainPath={"dashboard/courses"}
        />
        <User />
      </Header>
      <div className="FilterBar-container">
        <FilterBar
          values={categoriesValue}
          parameter="categories"
          mainPath={"dashboard/courses"}
        />
        {rol === "admin" || rol === "proffesor" ? (
          <NavLink to={`/dashboard/courses/add-course`} className="createLink">
            Subir Curso
          </NavLink>
        ) : null}
      </div>
      <CoursesList courses={data} search={search} />
    </>
  );
}

export default Courses;
