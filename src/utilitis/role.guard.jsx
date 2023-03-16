import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Login from "../pages/Login/Login";

export const RoleGuard = ({ rolesAllowed }) => {
  const { isAuth, rol } = useSelector((store) => store.user);
  const isAllowed = rolesAllowed?.includes(rol);


  return isAllowed ? (
    <Outlet />
  ) : isAuth ? (
    <Navigate to="/dashboard" replace />

  ) : (
    <Navigate replace to={"/login"} />
  );
};
