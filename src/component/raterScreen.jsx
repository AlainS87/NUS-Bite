import React from "react";
import ResponsiveAppBar from "../Appbar";
import "../RateScreen.css";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Form, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "./supabaseData";
import BasicRating from "../Ratingfunc";
import { Input } from "@mui/material";
import { RaterContent } from "./raterContent";
import { RaterContentWithFilter } from "./raterContentWithFilter";

export const Rater = () => {
  const navigate = useNavigate();

  const [stalls, setStalls] = useState(null);
  const [error, setError] = useState(null);
  const [filterUsed, haveFilter] = useState(false);
  const [filter, setFilter] = useState("");
  //let filterUsed = false;
  //var filter;

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
        <Input type="text" onChange={(e) => setFilter(e.target.value)}></Input>
        <Button size="sm" onClick={() => haveFilter(true)}>
          Search
        </Button>
        <h3>Stalls we have</h3>
        <Row>
          {filterUsed === false ? (
            <>
              {stalls &&
                stalls.map((stalls) => (
                  <div className="list">
                    {" "}
                    <RaterContent stalls={stalls} />{" "}
                  </div>
                ))}
            </>
          ) : (
            <>
              {stalls &&
                stalls.map((stalls) => (
                  <div className="listWithFilter">
                    {" "}
                    <RaterContentWithFilter
                      stalls={stalls}
                      filter={filter}
                    />{" "}
                  </div>
                ))}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};
