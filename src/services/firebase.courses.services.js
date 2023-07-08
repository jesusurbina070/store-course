import { uuidv4 } from "@firebase/util";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
  query,
  collection,
  deleteDoc,
  where,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { db, storage } from "../Firebase/firebase";

const initialCourse = {
  id: "",
  name: "",
  description: "",
  categories: [],
  price: 0,
  image: "",
};

const initialClass = {
  id: "",
  name: "",
  description: "",
  duration: "",
  comments: [],
  moduleId: "",
  position: 0,
};

const initialModule = {
  name: "",
  classesID: [],
  id: "",
};

export const createCourse = async (data) => {
  try {
    const newId = uuidv4();
    const imageData = await uploadCourseImage(data.image[0]);
    const newCourse = {
      ...initialCourse,
      ...data,
      image: imageData,
      id: newId,
    };
    await setDoc(doc(db, "courses", newCourse.id), newCourse);
  } catch (err) {
    console.log(err);
  }
};

export const updateCourse = async (id, data) => {
  try {
    await updateDoc(doc(db, `courses/${id}/`), data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteCourse = async (
  courseId,
  modulesId,
  classesId,
  imageref
) => {
  try {
    modulesId.forEach((id) =>
      deleteDoc(doc(db, `courses/${courseId}/modules/${id}`))
    );
    classesId.forEach((id) =>
      deleteDoc(doc(db, `courses/${courseId}/classes/${id}`))
    );
    await deleteObject(ref(storage, imageref));
    await deleteDoc(doc(db, `courses/${courseId}`));
  } catch (err) {
    console.log(err);
  }
};

export const createModule = async (courseId, name) => {
  try {
    const newId = uuidv4();
    const newModule = {
      ...initialModule,
      id: newId,
      name: name,
    };
    await setDoc(
      doc(db, `courses/${courseId}/modules/${newModule.id}`),
      newModule
    );
  } catch (err) {
    console.log(err);
  }
};

export const createClass = async (courseId, data) => {
  try {
    const newId = uuidv4();
    const newClass = {
      ...initialClass,
      ...data,
      id: newId,
    };
    await setDoc(
      doc(db, `courses/${courseId}/classes/${newClass.id}`),
      newClass
    );
    await updateDoc(
      doc(db, `courses/${courseId}/modules/${newClass.moduleId}`),
      {
        classesID: arrayUnion(newClass.id),
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const updateClass = async (courseId, classData) => {
  try {
    await updateDoc(
      doc(db, `courses/${courseId}/classes/${classData.id}`),
      classData
    );
  } catch (err) {
    console.log(err);
  }
};

export const updateModule = async (courseId, module) => {
  try {
    await updateDoc(
      doc(db, `courses/${courseId}/modules/${module.id}`),
      module
    );
  } catch (err) {
    console.log(err);
  }
};

export const deleteModule = async (courseId, module) => {
  try {
    module.classesID.forEach((id) =>
      deleteDoc(doc(db, `courses/${courseId}/classes/${id}`))
    );
    await deleteDoc(doc(db, `courses/${courseId}/modules/${module.id}`));
  } catch (err) {
    console.log(err);
  }
};

export const deleteClass = async (courseId, classId) => {
  try {
    await deleteDoc(doc(db, `courses/${courseId}/classes/${classId}`));
  } catch (err) {
    console.log(err);
  }
};

export const uploadCourseImage = async (file) => {
  try {
    const storageRef = ref(storage, `courses/${uuidv4()}`);
    const image = await uploadBytes(storageRef, file);
    console.log(image);
    const url = await getDownloadURL(storageRef);
    return { url, name: image.metadata.fullPath };
  } catch (err) {
    console.log(err);
  }
};
