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
import {Stack, TextField, Button, Grid} from "@mui/material";
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
          <Navbar.Brand>Stalls</Navbar.Brand>
          <Nav>
            <Nav.Item>in NUS-Bite</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container className="container">
        <Row>
          <h3>Add Your Stall</h3>
          <TextField
            style={{
              marginTop: '20px'
            }}
            label={'Stall Name'}
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <TextField
            style={{
              marginTop: '20px'
            }}
            label={'Stall Location'}
            type="text"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br></br>


          <Box marginTop={'30px'}>
            <Button variant={'contained'} onClick={() => addStall()}>Submit</Button>
            <Button variant={'contained'} color={'inherit'}
                    style={{
                      marginLeft: '15px'
                    }}
                    onClick={() => refresh()}>Refresh to see change!</Button>
          </Box>
        </Row>
        <hr></hr>
        <h3>Stalls Added</h3>
        <Box padding={'30px'}>
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
