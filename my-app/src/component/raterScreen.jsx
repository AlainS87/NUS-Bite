import React from "react";
import ResponsiveAppBar from "../Appbar";
import "../RateScreen.css";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Nav,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "./supabaseData";
import BasicRating from '../Ratingfunc'
import { Input } from "@mui/material";
import { RaterContent } from "./raterContent";

export const Rater = () => {
    const navigate = useNavigate();

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

    return (
      <div className="raterfullscreen">
        <ResponsiveAppBar />
        <Container>
          <Input></Input>
          <Button>Search</Button>
          <h3>Stalls we have</h3>
          <Row>
            {stalls &&
              stalls.map((stalls) => (
              <div className="list">
                {" "}
                <RaterContent stalls={stalls} />{" "}
              </div>
            ))}
          </Row>
        </Container>
      </div>
    );
  };
  