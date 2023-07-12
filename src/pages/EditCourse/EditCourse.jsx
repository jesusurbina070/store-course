import React, { useState, useEffect } from "react";
import CourseClasses from "../../components/CourseClasses/CourseClassesEdit";
import { EditCourseProvider } from "./context/editCourse.context";
import ClassForm from "./components/ClassForm/ClassForm"
import ModuleForm from "./components/ModuleForm/ModuleForm";
import CourseEditView from "./components/CourseEditView/CourseEditView";
import CourseForm from "./components/CourseForm/CourseForm";
import { Header } from "../../components";
import { Title, User } from "../../components/Header/components";

function EditCourse() {

  return (
    <div>
      <EditCourseProvider>
        <Header>
          <Title title="Editar Curso" />
          <User />
        </Header>
        <CourseEditView />
        <CourseClasses />
        <CourseForm />
        <ModuleForm />
        <ClassForm />
      </EditCourseProvider>
    </div>
  );
}

export default EditCourse;
