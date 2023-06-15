import React from "react";
import ResponsiveAppBar from "../Appbar";
import rank from "./rank.svg";
import rate from "./rate.svg";
import "../MainScreen.css";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="fullscreen">
      <ResponsiveAppBar />
      <div className="Hawker-Rater">
        <button onClick={() => navigate("Rater")} className="HawkerRaterButton">
          <img src={rate} width={600} className="rate-logo"></img>
        </button>
      </div>
      <div className="Hawker-Ranking">
        <button
          //</div>onClick={() => navigate("HawkerLogin")}
          className="HawkerRankingButton"
          onClick={() => navigate("Ranking")}
        >
          <img src={rank} width={600} className="rank-logo"></img>
        </button>
      </div>
      <div className="bottompart"></div>
    </div>
  );
};
