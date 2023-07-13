import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./component/HomeScreen";
import { Login } from "./component/loginScreen";
import { Main } from "./component/MainSreen";
import { HawkerLogin } from "./component/hawkerLogin";
import { HawkerMain } from "./component/hawkerMainScreen";
import { VisitorMain } from "./component/visitorMainScreen";
import { Rater } from "./component/raterScreen";
import { Ranking } from "./component/ranking";
import Profile from "./component/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/login/mainScreen" element={<Main />}></Route>
      <Route path="/HawkerLogin/HawkerMain" element={<HawkerMain />}></Route>
      <Route path="/HawkerLogin" element={<HawkerLogin />}></Route>
      <Route path="/VisitorMain" element={<VisitorMain />}></Route>
      <Route path="/Login/mainScreen/Rater" element={<Rater />}></Route>
      <Route path="/Login/mainScreen/Ranking/:type" element={<Ranking />}></Route>
      <Route path={'/profile'} element={<Profile />}/>
    </Routes>
  );
}
