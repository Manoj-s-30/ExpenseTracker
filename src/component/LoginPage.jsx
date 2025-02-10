import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import { LoginCredentials } from "../utils/Utils";
import { replace, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

function LoginPage() {
  const { userData, setUserData, isAuthenticated, setIsAuthenticated } =
    useContext(UserContext);
  let navigate = useNavigate();
  const HandleChange = (e) => {
    let { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log("outside", isAuthenticated);
  const HandleLoginClick = (e) => {
    e.preventDefault();
    setUserData({
      userName: "",
      userPassword: "",
    });
    LoginCredentials(userData, setIsAuthenticated);
    console.log("inside", isAuthenticated);
    console.log(userData.userName);
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Log in</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <TextField
          value={userData.userName}
          name="userName"
          type="text"
          onChange={HandleChange}
          placeholder="Enter UserName"
        />

        <TextField
          value={userData.userPassword}
          name="userPassword"
          type="password"
          onChange={HandleChange}
          placeholder="Enter Password"
        />
        {/* <input 
        value = {userData.dobMonth}
        name='dobMonth'
        type='number'
        onChange={HandleChange}
        placeholder='Enter month'
        />
        <input 
        value = {userData.dobYear}
        name='dobYear'
        type='number'
        onChange={HandleChange}
        placeholder='Enter Year'
        /> */}
        <Button onClick={HandleLoginClick}>Login</Button>
      </div>
    </div>
  );
}

export default LoginPage;
