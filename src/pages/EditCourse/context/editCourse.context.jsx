import { collection, doc } from "firebase/firestore";
import { useState } from "react";
import { createContext, useContext } from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { db } from "../../../Firebase/firebase";

export const EditCourseContext = createContext();

export const EditCourseProvider = ({ children }) => {
  const params = useParams();
  const courseRef = doc(db, `courses/${params.id}`);
  const modulesRef = collection(db, `courses/${params.id}/modules/`);
  const classesRef = collection(db, `courses/${params.id}/classes/`);
  const [course] = useDocumentData(courseRef);
  const [modules] = useCollectionData(modulesRef);
  const [classes] = useCollectionData(classesRef);
  const [editClass, setEditClass] = useState(false);
  const [editModule, setEditModule] = useState(false);
  const classForm = useForm();
  const moduleForm = useForm();

  return (
    <EditCourseContext.Provider
      value={{
        course,
        modules,
        classes,
        classForm,
        moduleForm,
        editClass,
        setEditClass,
        editModule,
        setEditModule
      }}
    >
      {children}
    </EditCourseContext.Provider>
  );
};

export const useEditCourse = () => {
  const context = useContext(EditCourseContext);
  if (context === undefined) {
    throw new Error("useEditCourse must be used within a EditCourseProvider");
  }
  return context;
};
