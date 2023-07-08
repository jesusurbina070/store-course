import React from 'react'
import { CourseViewProvider } from './context/CourseViewContext'
import Details from './components/Details/Details'

function CourseView() {
  return (
    <CourseViewProvider>
        <Details />
    </CourseViewProvider>
  )
}

export default CourseView