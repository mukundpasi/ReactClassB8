import React, { useState } from "react";
import "./App.css";
import MainPage from "./component/MainPage";
import Profile from "./component/Profile";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile/>} />
        {/* <Route path="/" element={<MainPage/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
