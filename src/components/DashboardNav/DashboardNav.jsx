import { Link } from "react-router-dom"

function DashboardNav () {
    
    return(
        <div>
            <h4>Nombre</h4>
            <nav>
                <ul>
                    <li><Link>Cursos</Link></li>
                    <li><Link>Ordenes</Link></li>
                    <li><Link>Usuarios</Link></li>  
                </ul>
            </nav>
        </div>
    )
}

export default DashboardNav