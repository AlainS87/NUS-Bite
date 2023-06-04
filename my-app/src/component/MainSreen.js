import React from "react";
import ResponsiveAppBar from "../Appbar";
import rank from "./rank.svg";
import rate from "./rate.svg";
import "../MainScreen.css";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  //const navigate = useNavigate();
  return (
    <div className="fullscreen">
      <ResponsiveAppBar />
      <div className="Hawker-Rater">
        <button
          //onClick={() => navigate("HawkerLogin")}
          className="Hawker Rater Button"
        >
          <img src={rate} width={50} className="rate-logo"></img>
        </button>
      </div>
      <div className="Hawker-Ranking">
        <button
          //</div>onClick={() => navigate("HawkerLogin")}
          className="Hawker Ranking Button"
        >
          <img src={rank} width={50} className="rank-logo"></img>
        </button>
      </div>
    </div>
  );
};
