import React from 'react'
import ResponsiveAppBar from '../Appbar'
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap'
import { useState, useEffect, useCallback } from 'react'
import StallInfo from './stallInfo'
import { supabase } from './supabaseData'

export const HawkerMain = () => {
  const [ name, setName ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ price, setPrice ] = useState(0);
  const [ taste, setTaste ] = useState(0);
  const [ comment, setComment ] = useState("");
  const [ stalls, setStalls ] = useState(null);
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
  }, [setStalls, setError])

  useEffect(() => {
    getStalls();
  }, [getStalls])

  const addStall = (event) => {
    supabase
      .from("stalls")
      .insert({ 
        name: name,
        location: location,
        price: price,
        taste: taste,
        comment: comment
       })
      .then(({ error }) => {
        if (error) {
          setError(error);
        } else {
          setStalls();
        }
      });
    setError(null);
  };

  return (
    <div>
        <ResponsiveAppBar />
        <Navbar>
          <Container>
            <Navbar.Brand>Stalls</Navbar.Brand>
            <Nav>
              <Nav.Item>in NUS-Bite</Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <h3>Add Your Stall</h3>
            <Form.Label>Stall Name</Form.Label>
            <Form.Control 
              type="text" 
              id="name"
              onChange={(e) => setName(e.target.value)}
              />
            <br></br>
            <Form.Label>Stall Location</Form.Label>
            <Form.Control 
              type="text" 
              id="location"
              onChange={(e) => setLocation(e.target.value)}
              />
            <br></br>
            <Form.Label>Price</Form.Label>
            <Form.Control 
              type="number" 
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              />
            <br></br>
            <Form.Label>Taste</Form.Label>
            <Form.Control 
              type="number" 
              id="taste"
              onChange={(e) => setTaste(e.target.value)}
              />
            <br></br>
            <Form.Label>Comment</Form.Label>
            <Form.Control 
              type="text" 
              id="comment"
              onChange={(e) => setComment(e.target.value)}
              />
            <br></br>
            <button onClick={() => addStall()}>Submit</button>
          </Row>
          <hr></hr>
          <h3>Stalls Added</h3>
          <Row>
            {stalls && stalls.map((stalls) => (
              <StallInfo stalls={stalls}/>
            ))}
          </Row>
        </Container>
    </div>
  )
}
