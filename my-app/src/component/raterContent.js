import React from 'react'
import { Card, Button, Form } from "react-bootstrap";
import { supabase } from "./supabaseData";
import { useState } from "react";
import { Typography, Box, Rating } from '@mui/material';

export const RaterContent = (props) => {
  const stalls = props.stalls;

  const [edit, setEdit] = useState(false);
  const [price, setPrice] = useState(0);
  const [taste, setTaste] = useState(0);
  const [environment, setEnvironment] = useState(0);

  const updateStall = (id) => {
    supabase
      .from("stalls")
      .update({
        price: stalls.price + price,
        taste: stalls.taste + taste,
        environment: stalls.environment + environment,
        customers: stalls.customers + 1
      })
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          console.log(error.message);
          alert("Failed to update task!");
        }
      });
      setEdit(false);
  };

  const refresh = () => window.location.reload(false);

//   function handleRatingChange(value) {
//     console.log(value);
//     //here set your state for rating
//   }

  return (
    <div>
        <Card>
            <Card.Body>
            {edit === false ? (
            <>
              <Card.Title>Stall Name: {stalls.name}</Card.Title>
              <Card.Text>Location: {stalls.location}</Card.Text>
              <Card.Text>Price: {stalls.price / stalls.customers}</Card.Text>
              <Card.Text>Taste: {stalls.taste / stalls.customers}</Card.Text>
              <Card.Text>Environment: {stalls.environment / stalls.customers}</Card.Text>
              <Button variant="secondary" onClick={() => setEdit(true)}>
                Rate this stall
              </Button>
              <Button variant="secondary" onClick={() => refresh()}>
                Refresh to see change!
              </Button>
            </>
          ) : (
            <>
              <h4>Your Rating</h4>
              <Box
                sx={{
                    "& > legend": { mt: 2 },
                }}
                >
            <Typography component="legend">Taste</Typography>
            <Rating
                name="TasteRating"
                precision={0.5}
                value={taste}
                onChange={(event, newValue) => {
                //handleRatingChange(newValue);
                setTaste(newValue);
                }}
            />
            <Typography component="legend">Environment</Typography>
            <Rating
                name="EnvRating"
                precision={0.5}
                value={environment}
                onChange={(event, newValue) => {
                setEnvironment(newValue);
                }}
            />

            <Typography component="legend">Price</Typography>
            <Rating
                name="PriceRating"
                precision={0.5}
                value={price}
                onChange={(event, newValue) => {
                setPrice(newValue);
                }}
            />
            <Typography component="legend">Overall</Typography>
            <Rating
                name="read-only"
                precision={0.5}
                value={(price + taste + environment) / 3}
                readOnly
            />
            </Box>
              <Button size="sm" onClick={() => updateStall(stalls.id)}>
                Submit
              </Button>
              <Button size="sm" onClick={() => setEdit(false)}>
                Return
              </Button>
            </>
            )}
            </Card.Body>
        </Card>
    </div>
  )
}
