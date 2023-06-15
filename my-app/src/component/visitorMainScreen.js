import React from 'react'
import ResponsiveAppBar from '../Appbar'
import { useState, useEffect, useCallback } from "react";
import { supabase } from "./supabaseData";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { VisitorContent } from './visitorContent';

export const VisitorMain = () => {
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
    <div>
        <ResponsiveAppBar />
        <h1>Hello visitor!</h1>
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