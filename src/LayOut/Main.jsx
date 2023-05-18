import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
