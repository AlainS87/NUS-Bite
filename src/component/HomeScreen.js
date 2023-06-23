import React, { Component } from "react";
import logoNUSBITE from "../logoNUSBITE.gif";
import "../App.js";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ResponsiveAppBar from "../Appbar";
import { HawkerLogin, hawkerLogin } from "./hawkerLogin";

export const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <ResponsiveAppBar />
      <header className="App-header">
        <h1>NUS Bite</h1>
        <img src={logoNUSBITE} className="App-logo" />
        <h3 className="login-header">login as</h3>
        <table className="id-table">
          <tr>
            <button
              onClick={() => navigate("Login")}
              className="App-login-button-taster"
            >
              <b>NUS Tasters</b>
            </button>

            <div className="blank-between-button"></div>

            <button
              onClick={() => navigate("HawkerLogin")}
              className="App-login-button-hawker"
            >
              <b>NUS Hawkers</b>
            </button>
          </tr>
        </table>
        <h2 className="or">—————OR—————</h2>
        <button
          onClick={() => navigate("VisitorMain")}
          className="App-login-button-visitor"
        >
          <b>NUS Visitor</b>
        </button>
      </header>
    </div>
  );
};
