import React from "react";
import Course from "../Course/Course";
import "./CoursesList.scss";

function CoursesList({ courses, search }) {
  const searchToLowerCase = search?.toLowerCase();
  const filterCourses = !!search
    ? courses?.filter(
        ({ name, description, categories }) =>
          name?.toLowerCase().includes(searchToLowerCase) ||
          description?.toLowerCase().includes(searchToLowerCase) ||
          categories?.some(
            (category) => category.toLowerCase() === searchToLowerCase
          )
      )
    : courses;
  return (
    <section className="CoursesList">
      {filterCourses?.map((course) => (
        <Course data={course} />
      ))}
    </section>
  );
}

export default CoursesList;
