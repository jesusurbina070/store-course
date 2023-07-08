import React from "react";
import { Route, Routes} from "react-router-dom";
import { DashboardNav } from "../../components";
import { RoleGuard } from "../../utilitis/role.guard";
import { CreateCourse } from "../CreateCourse";
import { EditCourse } from "../EditCourse";
import { Users } from "../Users";
import { Courses } from "../Courses";
import CourseView from "../CourseView/CourseView";
import "./Dashboard.scss";

function Dashboard() {

  return (
    <main className="Dashboard">
      <DashboardNav />
      <section className="Dashboard__content">
        <Routes>
          <Route
            element={
              <RoleGuard rolesAllowed={["admin", "professor", "studient"]} />
            }
          >
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseView />} />
          </Route>
          <Route element={<RoleGuard rolesAllowed={["admin", "professor"]} />}>
            <Route path="/add-course" element={<CreateCourse />} />
            <Route path="/edit-course/:id" element={<EditCourse />} />
          </Route>
          <Route element={<RoleGuard rolesAllowed={["admin"]} />}>
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </section>
    </main>
  );
}

export default Dashboard;
