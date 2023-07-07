import React from "react";
import { supabase } from "./supabaseData";
import { useState } from "react";
import { Typography, Box, Rating, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        customers: stalls.customers + 1,
      })
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          console.log(error.message);
          alert("Failed to update task!");
        }
      });
    setEdit(false);
    alert("updated successfully!");
  };

  const naviate = useNavigate();
  const confirm = () => naviate("/");

  //   function handleRatingChange(value) {
  //     console.log(value);
  //     //here set your state for rating
  //   }

  return (
    <div>
      <Card variant="outlined" style={{ backgroundColor: "#3264B3" }}>
        <CardContent>
          {edit === false ? (
            <>
              <Typography style={{ color: "#F0F8FF"}}>Stall Name: {stalls.name}</Typography>
              <Typography style={{ color: "#F0F8FF"}}>Location: {stalls.location}</Typography>
              <Typography style={{ color: "#F0F8FF"}}>Price: {(stalls.price / stalls.customers).toFixed(2)}</Typography>
              <Typography style={{ color: "#F0F8FF"}}>Taste: {(stalls.taste / stalls.customers).toFixed(2)}</Typography>
              <Typography style={{ color: "#F0F8FF"}}>
                Environment: {(stalls.environment / stalls.customers).toFixed(2)}
              </Typography>
              <Button variant="contained" onClick={() => setEdit(true)}>
                Rate this stall
              </Button>
              <Button variant="contained" color="success" onClick={() => confirm()}>
                Confirm
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
                <Typography component="legend" style={{ color: "#F0F8FF"}}>Taste</Typography>
                <Rating
                  name="TasteRating"
                  precision={0.5}
                  value={taste}
                  onChange={(event, newValue) => {
                    //handleRatingChange(newValue);
                    setTaste(newValue);
                  }}
                />
                <Typography component="legend" style={{ color: "#F0F8FF"}}>Environment</Typography>
                <Rating
                  name="EnvRating"
                  precision={0.5}
                  value={environment}
                  onChange={(event, newValue) => {
                    setEnvironment(newValue);
                  }}
                />

                <Typography component="legend" style={{ color: "#F0F8FF"}}>Price</Typography>
                <Rating
                  name="PriceRating"
                  precision={0.5}
                  value={price}
                  onChange={(event, newValue) => {
                    setPrice(newValue);
                  }}
                />
                <Typography component="legend" style={{ color: "#F0F8FF"}}>Overall</Typography>
                <Rating
                  name="read-only"
                  precision={0.5}
                  value={(price + taste + environment) / 3}
                  readOnly
                />
              </Box>
              <Button variant="contained" color="success" onClick={() => updateStall(stalls.id)}>
                Submit
              </Button>
              <Button variant="contained" onClick={() => setEdit(false)}>
                Return
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
