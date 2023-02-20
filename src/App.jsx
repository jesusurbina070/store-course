import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Home, Login, SignUp, CreateCourse } from "./pages";
import { AuthProvider } from "./context/authContext";
import "normalize.css";
import ResetPassword from "./pages/Login/pages/ResetPassword/ResetPassword";
import EditCourse from "./pages/EditCourse/EditCourse";


 


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route path="*" element={<>Not Found</>} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/login/resetpassword" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subirCurso" element={<CreateCourse />} />
        <Route path="/editCourse/:id" element={<EditCourse />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
