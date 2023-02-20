import React, { useState, useEffect } from "react";
import CourseClasses from "../../components/CourseClasses/CourseClasses";
import { EditCourseProvider } from "./context/editCourse.context";
import ClassForm from "./components/ClassForm/ClassForm"
import ModuleForm from "./components/ModuleForm/ModuleForm";
import CourseEditView from "./components/CourseEditView/CourseEditView";
import CourseForm from "./components/CourseForm/CourseForm";




function EditCourse() {
  return (
    <div>
      <EditCourseProvider>
        <h2>Editar Curso</h2>
        <CourseEditView />
        <CourseForm/>
        <ModuleForm />
        <CourseClasses/>
        <ClassForm />
      </EditCourseProvider>
    </div>
  );
}

export default EditCourse;
