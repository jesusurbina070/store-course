import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import SingUp from "./pages/SingUp"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/signup" element={< SingUp/>} />
      </Routes>
    </>
  );
}

export default App;
