import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function RedirectDashboard() {
  const { uid } = useSelector((state) => state.user);
  return uid ? <Navigate to="/dashboard" /> : <Outlet />;
}
