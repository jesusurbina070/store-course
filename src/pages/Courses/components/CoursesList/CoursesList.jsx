import React from 'react'
import Course from '../Course/Course'

function CoursesList({courses}) {
  return (
    <div>
        {courses?.map((course) => (
          <Course data={course} />
        ))} 
    </div>
  )
}

export default CoursesList