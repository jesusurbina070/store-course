import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { matchPath } from "react-router-dom";
import { useEditCourse } from "../../pages/EditCourse/context/editCourse.context";
import ModuleView from "./components/ModuleEdit/ModuleEdit";
function CourseClassesEdit({edit}) {
  const { modules } = useEditCourse()
  return (
    <div>
      {modules?.map((doc) => <ModuleView key={doc.id} module={doc} />
      )}
    </div>
  )
}

export default CourseClassesEdit;
