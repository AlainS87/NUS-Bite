import React from 'react'
import ResponsiveAppBar from "../Appbar";
import { supabase } from "./supabaseData";
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect, useCallback } from "react";
import { VisitorContent } from './visitorContent';

export const Ranking = () => {
    const [stalls, setStalls] = useState(null);
    const [error, setError] = useState(null);

    const getStalls = useCallback(() => {
        supabase
        .from("stalls")
        .select()
        .order("price", { ascending: false })
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
    <div>
        <ResponsiveAppBar />
        <h3>Price Ranking</h3>
        <Container>
        <Row>
          {stalls &&
            stalls.map((stalls) => (
              <div>
                <VisitorContent stalls={stalls} />
              </div>
            ))}
        </Row>
        </Container>
    </div>
  )
}
