import { Link, useLocation } from "react-router-dom"

function DashboardNav() {
    const mainpath = "dashboard"
   
    return (
        <div>
            <h4>Nombre</h4>
            <nav>
                <ul>
                    <li><Link to={`/${mainpath}/courses`}>Cursos</Link></li>
                    <li><Link to={`/${mainpath}/users`}>Usuarios</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default DashboardNav