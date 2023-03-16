import React from 'react'
import { useEditCourse } from '../../../../pages/EditCourse/context/editCourse.context';
import { deleteModule } from '../../../../services/firebase.courses.services';
import ClassView from '../ClassEdit/ClassEdit';


function ModuleEdit({ module, classes }) {
  const { course, classes, moduleForm, setEditModule } = useEditCourse()
  const { name } = module;
  const { setValue } = moduleForm;

  const handleEditModule = (module) => {
    const values = Object.entries(module)
    values.map(([key, value]) => setValue(key, value))
    setEditModule(true)
  }

  const handleDeleteModule = (courseId, module) => {
    deleteModule(courseId, module)
  }

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => handleEditModule(module)}>editar</button>
      <button onClick={() => handleDeleteModule(course.id, module)}>Eliminar</button>
      <div>
        {classes?.filter((c) => c.moduleId === module.id).map((data) => (
          <ClassView key={data.id} classData={data} />
        ))}
      </div>
    </div>
  )
}

export default ModuleEdit