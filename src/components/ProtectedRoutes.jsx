import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  /* trae inf de la store */

  const nameTrainer = useSelector((state) => state.nameTrainer);
  console.log(nameTrainer);

  /* String vacio tiende false y si se llena inf dentro del input es true */
  if (nameTrainer) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
export default ProtectedRoutes;
