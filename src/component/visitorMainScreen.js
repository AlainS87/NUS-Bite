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
} from "react-bootstrap";
import { VisitorContent } from './visitorContent';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "./profile.css";

export const VisitorMain = () => {
  const [stalls, setStalls] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
    <div className='bgc'>
        <ResponsiveAppBar />
        <br />
        <Typography variant='h4' sx={{ fontWeight:"bold"}} style={{ color: "#F0F8FF"}}>Welcome to NUS-Bite!</Typography>
        <Stack direction={'row'}>
          <Button
            style={{color: "#FFFFFF"}}
            onClick={() => {
              navigate(`/Login/mainScreen/Ranking/total`)
            }}
          >
            Total Ranking
          </Button>
          <Button
            style={{color: "#FFFFFF"}}
            onClick={() => {
              navigate(`/Login/mainScreen/Ranking/price`)
            }}
          >
            Price Ranking
          </Button>
          <Button
            style={{color: "#FFFFFF"}}
            onClick={() => {
              navigate(`/Login/mainScreen/Ranking/taste`)
            }}
          >
            Taste Ranking
          </Button>
        </Stack>
        <Container>
        <Box display={'flex'} flexWrap={'wrap'}>
          {stalls &&
            stalls.map((stalls) => (
              <div>
                <VisitorContent stalls={stalls} />
              </div>
            ))}
        </Box>
        </Container>
    </div>
  )
}