import React from "react";
import ResponsiveAppBar from "../Appbar";
import "../RateScreen.css";
import { useNavigate } from "react-router-dom";
import BasicRating from '../Ratingfunc'

export const Rater = () => {
    const navigate = useNavigate();
    return (
      <div className="raterfullscreen">
        <ResponsiveAppBar />
        <BasicRating/>
      </div>
    );
  };
  