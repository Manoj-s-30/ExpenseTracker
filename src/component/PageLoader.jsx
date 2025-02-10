import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../context/userContext";
import LoginPage from "./LoginPage";
import { DashBoard } from "./DashBoard";

const PageLoader = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageLoader;
