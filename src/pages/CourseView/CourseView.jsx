import React from 'react'
import { CourseViewProvider } from './context/CourseViewContext'
import Details from './components/Details/Details'
import Modules from './components/Modules/Modules'

function CourseView() {
  return (
    <CourseViewProvider>
        <Details />
        <Modules  />
    </CourseViewProvider>
  )
}

export default CourseView