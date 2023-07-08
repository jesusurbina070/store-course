import { NavLink } from "react-router-dom";
import "./DashboardNav.scss";
import { FaList } from "react-icons/fa";
import { FaCartShopping, FaPeopleGroup } from "react-icons/fa6";
import { BiSolidBook } from "react-icons/bi";
import { useSelector } from "react-redux";

function DashboardNav() {
  const { rol } = useSelector((state) => state.user);
  const mainpath = "dashboard";

  return (
    <div className="DashboardNav">
      <h2 className="DashboardNav__title">Nombre</h2>
      <nav className="DashboardNav__menu">
        <ul className="DashboardNav__menulist">
          {rol !== "admin" && (
            <li className="DashboardNav__menuItem">
              <NavLink
                to={`/${mainpath}/owncourses`}
                className={({ isActive }) =>
                  isActive
                    ? "DashboardNav__listItem active"
                    : "DashboardNav__listItem"
                }
              >
                <BiSolidBook size={"1rem"} />
                Mis Cursos
              </NavLink>
            </li>
          )}
          <li className="DashboardNav__menuItem">
            <NavLink
              to={`/${mainpath}/courses`}
              className={({ isActive }) =>
                isActive
                  ? "DashboardNav__listItem active"
                  : "DashboardNav__listItem"
              }
            >
              <FaList size={"1rem"} />
              Cursos
            </NavLink>
          </li>
          {rol === "admin" && (
            <li className="DashboardNav__menuItem">
              <NavLink
                to={`/${mainpath}/users`}
                className={({ isActive }) =>
                  isActive
                    ? "DashboardNav__listItem active"
                    : "DashboardNav__listItem"
                }
              >
                <FaPeopleGroup />
                Usuarios
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to={`/${mainpath}/orders`}
              className="DashboardNav__listItem"
            >
              <FaCartShopping />
              Ordenes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${mainpath}/referrals`}
              className="DashboardNav__listItem"
            >
              <FaPeopleGroup />
              referidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DashboardNav;
