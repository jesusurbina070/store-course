import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { logOut } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
import { unSetUser } from "../../reducers/user/userSlice";
import { Route, Routes, useNavigate } from "react-router-dom";
import { context } from "../../context/authContext";
import { DashboardNav } from "../../components";
import { RoleGuard } from "../../utilitis/role.guard";
import { CreateCourse } from "../CreateCourse";
import { EditCourse } from "../EditCourse";
import { Users } from "../Users";
import Course from "../Courses/components/Course/Course";
import { Courses } from "../Courses";


function Dashboard() {
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    logOut();
    dispatch(unSetUser());
  };

  return (
    <main>
      <DashboardNav />
      <button onClick={handleClick}>cerrar</button>
      <Routes>
        <Route element={<RoleGuard rolesAllowed={["admin", "professor", "studient"]} />}>
          <Route path="/courses" element={<Courses />} />
        </Route>
        <Route element={<RoleGuard rolesAllowed={["admin", "professor"]} />}>
          <Route path="/add-course" element={<CreateCourse />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />
        </Route>
        <Route element={<RoleGuard rolesAllowed={["admin"]} />}>
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </main>
  );
}

export default Dashboard;
