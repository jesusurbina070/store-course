import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login, SignUp, CreateCourse, EditCourse, CreateUser, Users, ResetPassword } from "./pages";
import { AuthProvider } from "./context/authContext";
import { RoleGuard } from "./utilitis/role.guard";
import { RedirectDashboard } from "./utilitis/redirect.private";
import "normalize.css";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route element={<RedirectDashboard />}>
          <Route path="/signup" element={<Login />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Route>
        <Route
          element={<RoleGuard rolesAllowed={["admin", "professor", "studient"]} />}
        >
          <Route path="/dashboard" element={<Navigate to={"/dashboard/courses"} />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
