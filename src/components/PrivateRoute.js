import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const userId = localStorage.getItem("userId");

  return userId ? children : <Navigate to="/" />;
}
