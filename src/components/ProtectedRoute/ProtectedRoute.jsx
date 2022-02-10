import React from "react";
import { Navigate } from "react-router-dom";
import auth from "../LoginForm/auth";

/* eslint-disable react/prop-types */
export const ProtectedRoute = ({ children }) => {
  return auth.isAuthenticated() ? children : <Navigate to="/login" />;
};
