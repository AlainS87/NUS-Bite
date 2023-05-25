import React, { Component } from "react";
import logoNUSBITE from "./logoNUSBITE.gif";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NUS Bite</h1>
          <img src={logoNUSBITE} className="App-logo" />
          <h3 className="login-header">login as</h3>
          <table className="id-table">
            <tr>
              <button
                className="App-login-button-taster"
                href="https://reactjs.org"
              >
                <b>NUS Tasters</b>
              </button>

              <div className="blank-between-button"></div>

              <button
                className="App-login-button-hawker"
                href="https://reactjs.org"
              >
                <b>NUS Hawkers</b>
              </button>
            </tr>
          </table>
          <h2 className="or">—————OR—————</h2>
          <button
            className="App-login-button-visitor"
            href="https://reactjs.org"
          >
            <b>NUS Visitor</b>
          </button>
        </header>
      </div>
    );
  }
}
export default App;
