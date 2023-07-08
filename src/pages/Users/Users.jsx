import { collection, query, where } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useSearchParams } from 'react-router-dom'
import { Header, FilterBar } from '../../components/'
import { Search, Title, User } from "../../components/Header/components"
import { db } from '../../Firebase/firebase'
import { UserList } from './components/'

const roles = [
    { name: "Estudiante", value: "studient" },
    { name: "Professor", value: "proffesor" },
    { name: "Administrador", value: "admin" }
]

function Users() {
    const [searchParams] = useSearchParams()
    const { role } = Object.fromEntries([...searchParams])

    const userRef = !!role ? query(collection(db, `users`), where("rol", "==", role)) : collection(db, `users`)
    const [data, loading, error] = useCollectionData(userRef)
    return (
        <section>
            <Header>
                <Title title="Users" />
                <Search placeholder={"Encontrar usuario"} mainPath={"dashboard/users"} />
                <User />
            </Header>
            <FilterBar values={roles} parameter="role" mainPath={"dashboard/users"} />
            <UserList users={data} />
        </section>
    )
}

export default Users