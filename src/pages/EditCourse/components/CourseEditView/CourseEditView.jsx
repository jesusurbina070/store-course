import React from 'react'
import { deleteCourse } from '../../../../services/firebase.courses.services'
import { useEditCourse } from '../../context/editCourse.context'

function CourseEditView() {
    const {course, modules, classes} = useEditCourse()
    const shortDescription = course?.description.split(" ").slice(0, 7).join(" ")
    const text = `${course?.name}, ${course?.categories}, ${course?.price}, ${shortDescription}`
    console.log(course?.image.name)

    const handleDeleteCourse = (courseId, modules, classes, image) => {
        const modulesId = modules.map((m) => m.id)
        const classesId = classes.map((c) => c.id)
        deleteCourse(courseId, modulesId, classesId, image) 
    
    }

  return (
    <div>
        <h5>Informacion de Facturación</h5>
        <p>{`${text}...` }</p>
        <img src={course?.image.url} alt="" width="100px" height="100px"/>
        <button>Cambiar</button>
        <button onClick={() => handleDeleteCourse(course.id, modules, classes, course.image.name)}>Eliminar Curso</button>
    </div>
  )
}

export default CourseEditView