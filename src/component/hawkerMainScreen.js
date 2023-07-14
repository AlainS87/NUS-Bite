import React from "react";
import ResponsiveAppBar from "../Appbar";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import StallInfo from "./stallInfo";
import { supabase } from "./supabaseData";
import "./hawkerMainScreen.css";
import {useAuthContext} from "../auth";
import {Stack, TextField, Button, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";

export const HawkerMain = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [stalls, setStalls] = useState(null);
  const [error, setError] = useState(null);
  const {userData} = useAuthContext();
  const [reload, setReload] = useState(true);
  useEffect(() => {
    if (userData) {
      supabase
        .from("stalls")
        .select(
          `
          *,
          users(*)
        `
        )
        .eq('user_id', userData.id)
        .order("id")
        .then(({ data: stalls, error }) => {
          setStalls(stalls);
          setError(error);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [reload, userData]);



  const addStall = (event) => {
   if (userData) {
     supabase
       .from("stalls")
       .insert({
         name: name,
         location: location,
         user_id: userData.id
       })
       .then(({ error }) => {
         if (error) {
           setError(error);
         } else {
           setReload(!reload)
         }
       });
     setError(null);
   }
  };

  const refresh = () => window.location.reload(false);

  return (
    <div className="hMS">
      <ResponsiveAppBar />
      <Navbar>
        <Container>
          <br />
          <Typography variant="h6" style={{ color: "#F0F8FF"}}>Stalls in NUS-Bite</Typography>
        </Container>
      </Navbar>
      <Container className="container">
        <Row>
          <Typography variant="h6" style={{ color: "#F0F8FF"}}>Add Your Stall</Typography>
          <TextField
            style={{
              marginTop: '10px'
            }}
            label={'Stall Name'}
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <TextField
            style={{
              marginTop: '10px'
            }}
            label={'Stall Location'}
            type="text"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br></br>


          <Box marginTop={'15px'}>
            <Button variant={'contained'} onClick={() => addStall()}>Submit</Button>
            <Button variant={'contained'}
                    style={{
                      marginLeft: '5px',
                      color: "#F0F8FF"
                    }}
                    onClick={() => refresh()}>Refresh to see change!</Button>
          </Box>
        </Row>
        <hr></hr>
        <Typography variant="h6" style={{ color: "#F0F8FF"}}>Stalls Added</Typography>
        <Box padding={'20px'}>
          <Grid container spacing={2}>
            {stalls &&
              stalls.map((stalls) => (
                <Grid item xs={12} md={4} lg={3}>
                  <StallInfo stalls={stalls} />{" "}
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
