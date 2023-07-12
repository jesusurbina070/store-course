import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { collection, doc } from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { EditCourseContext } from "../../EditCourse/context/editCourse.context";
import { db } from "../../../Firebase/firebase";
import { useSelector } from "react-redux";

export const CourseViewContext = createContext();

export const CourseViewProvider = ({ children }) => {
  const { courses } = useSelector((state) => state.user);
  const params = useParams();
  const courseRef = doc(db, `courses/${params.id}`);
  const modulesRef = collection(db, `courses/${params.id}/modules/`);
  const classesRef = collection(db, `courses/${params.id}/classes/`);
  const [course] = useDocumentData(courseRef);
  const [modules] = useCollectionData(modulesRef);
  const [classes] = useCollectionData(classesRef);
  const isBought = !!courses.filter((c) => c === course?.id).length

  return (
    <CourseViewContext.Provider
      value={{
        course,
        modules,
        classes,
        isBought,
      }}
    >
      {children}
    </CourseViewContext.Provider>
  );
};

export const useCourseView = () => {
  const context = useContext(CourseViewContext);
  if (context === undefined) {
    throw new Error("useEditCourse must be used within a EditCourseProvider");
  }
  return context;
};
