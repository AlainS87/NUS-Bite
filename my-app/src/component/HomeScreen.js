import React, { Component } from "react";
import logoNUSBITE from "/Users/hayashi/Desktop/Orbital2023/NUS-Bite-Orbital2023/my-app/src/logoNUSBITE.gif";
import "/Users/hayashi/Desktop/Orbital2023/NUS-Bite-Orbital2023/my-app/src/App.js";
import { useNavigate } from "react-router-dom";
import "/Users/hayashi/Desktop/Orbital2023/NUS-Bite-Orbital2023/my-app/src/App.css"
import ResponsiveAppBar from "/Users/hayashi/Desktop/Orbital2023/NUS-Bite-Orbital2023/my-app/src/Appbar.js"

export const HomeScreen = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      <ResponsiveAppBar />
       <header className="App-header">
        <h1>NUS Bite</h1>
        <img src={logoNUSBITE} className="App-logo"/>
        <h3 className="login-header">login as</h3>
        <table className="id-table">
          <tr>
            <button
              onClick={() => navigate("Login")}
              className="App-login-button-taster"
              href="https://reactjs.org"
            >
              <b>NUS Tasters</b>
            </button>

            <div className="blank-between-button"></div>

            <button
              onClick={() => navigate("Login")}
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
    // <div className="App">
    //     <ResponsiveAppBar />
    //     <header className="App-header">
    //       <h1>NUS Bite</h1>
    //       <img src={logoNUSBITE} className="App-logo" />
    //       <h3 className="login-header">login as</h3>
    //       <table className="id-table">
    //         <tr>
    //           <button
    //             className="App-login-button-taster"
    //             href="https://reactjs.org"
    //           >
    //             <b>NUS Tasters</b>
    //           </button>

    //           <div className="blank-between-button"></div>

    //           <button
    //             className="App-login-button-hawker"
    //             href="https://reactjs.org"
    //           >
    //             <b>NUS Hawkers</b>
    //           </button>
    //         </tr>
    //       </table>
    //       <h2 className="or">—————OR—————</h2>
    //       <button
    //         className="App-login-button-visitor"
    //         href="https://reactjs.org"
    //       >
    //         <b>NUS Visitor</b>
    //       </button>
    //     </header>
    //   </div>
  )
}
