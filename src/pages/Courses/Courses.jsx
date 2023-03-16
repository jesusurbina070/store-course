import { collection, query, where } from 'firebase/firestore'
import React from 'react'
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore'
import { useSearchParams } from 'react-router-dom'
import { FilterBar, Header } from '../../components'
import { Search, Title, User } from '../../components/Header/components'
import { db } from '../../Firebase/firebase'
import CoursesList from './components/CoursesList/CoursesList'


const categoriesValue = [
    { name: "Todos", value: "" },
    { name: 'Programacion', value: "Programacion" },
    { name: "Audio Visual", value: "Audio Visual" },
    { name: "Marketing", value: "Marketing" },
    { name: "Diseño", value: "Diseño" },
]

function Courses() {
    const [searchParams] = useSearchParams()
    const { categories } = Object.fromEntries([...searchParams])
    const coursesRef = !!categories ?
        query(collection(db, `courses`), where("categories", "array-contains", categories))
        : collection(db, `courses`)
    const [data, loading, error] = useCollectionData(coursesRef)
    return (
        <section>
            <Header>
                <Title title="Cursos" />
                <Search />
                <User />
            </Header>
            <FilterBar values={categoriesValue} parameter="categories" mainPath={"dashboard/courses"} />
            <CoursesList courses={data} />
        </section>
    )
}

export default Courses