import React from "react";
import ResponsiveAppBar from "../Appbar";
import {
  Navbar,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useState, useEffect, useCallback, } from "react";
import StallInfo from "./stallInfo";
import { supabase } from "./supabaseData";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import "./hawkerMainScreen.css";

export const HawkerMain = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [stalls, setStalls] = useState(null);
  const [error, setError] = useState(null);

  const getStalls = useCallback(() => {
    supabase
      .from("stalls")
      .select()
      .order("id")
      .then(({ data: stalls, error }) => {
        setStalls(stalls);
        setError(error);
      })
      .catch((error) => {
        setError(error);
      });
  }, [setStalls, setError]);

  useEffect(() => {
    getStalls();
  }, [getStalls]);

  const addStall = (event) => {
      supabase
        .from("stalls")
        .insert({
          name: name,
          location: location,
          price: 0,
          taste: 0,
          environment: 0,
          customers: 1,
          comment: comment,
        })
        .then(({ error }) => {
          if (error) {
            setError(error);
            alert("fail to add stall");
          } else {
            setStalls();
          }
        });
      setError(null);
      alert("added successfully!");
  };

  const navigate = useNavigate();
  const confirm = () => navigate("/");

  return (
    <div className="hMS">
      <ResponsiveAppBar />
      <Container className="container">
        <Row>
          <h3>Add Your Stall</h3>
          <TextField
            type="text"
            id="name"
            size="small"
            label="Stall Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <TextField
            type="text"
            id="location"
            size="small"
            label="Stall Location"
            variant="standard"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br></br>
          <TextField
            type="text"
            id="comment"
            size="small"
            label="Comment"
            variant="standard"
            onChange={(e) => setComment(e.target.value)}
          />
          <br></br>
          <Button variant="contained" onClick={() => addStall()}>Submit</Button>
          <Button variant="contained" onClick={() => confirm()}>Confirm</Button>
        </Row>
        <hr></hr>
        <h3>Stalls Added</h3>
        <Row>
          {stalls &&
            stalls.map((stalls) => (
              <div className="list">
                {" "}
                <StallInfo stalls={stalls} />{" "}
              </div>
            ))}
        </Row>
      </Container>
    </div>
  );
};
