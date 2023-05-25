import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./component/HomeScreen";
import { Login } from "./component/loginScreen";

export default function App() {
    return (
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    );
}
