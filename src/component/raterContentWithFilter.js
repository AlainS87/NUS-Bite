import React from "react";
import { supabase } from "./supabaseData";
import { useState } from "react";
import stallcard from "../stallcard.jpg"
import { Typography, Box, Rating, Card, Button, CardContent, CardMedia } from "@mui/material";

export const RaterContentWithFilter = ({ stalls, filter }) => {
  //const stalls = props.stalls;
  const [edit, setEdit] = useState(false);
  const [price, setPrice] = useState(0);
  const [taste, setTaste] = useState(0);
  const [environment, setEnvironment] = useState(0);
  console.log(filter);
  console.log(stalls.name);
  console.log(stalls.name.indexOf(filter));

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
  };

  const refresh = () => window.location.reload(false);

  //   function handleRatingChange(value) {
  //     console.log(value);
  //     //here set your state for rating
  //   }

  return (
    <div>
      {stalls.name.indexOf(filter) !== -1 || filter === {} ? (
        <>
          <Card variant="outlined" style={{ backgroundColor: "#3264B3"}}>
            <CardContent>
              {edit === false ? (
                <>
                <CardMedia component="img" sx={{ height: 100, objectFit: "contain" }} image={stallcard}/>
                  <Typography style={{ color: "#F0F8FF"}}>Stall Name: {stalls.name}</Typography>
                  <Typography style={{ color: "#F0F8FF"}}>Location: {stalls.location}</Typography>
                  <Typography style={{ color: "#F0F8FF"}}>
                    Price: {(stalls.price / stalls.customers).toFixed(2)}
                  </Typography>
                  <Typography style={{ color: "#F0F8FF"}}>
                    Taste: {(stalls.taste / stalls.customers).toFixed(2)}
                  </Typography>
                  <Typography style={{ color: "#F0F8FF"}}>
                    Environment: {(stalls.environment / stalls.customers).toFixed(2)}
                  </Typography>
                  <Button variant="contained" onClick={() => setEdit(true)}>
                    Rate this stall
                  </Button>
                  <Button variant="contained" onClick={() => refresh()}>
                    Refresh to see change!
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="subtitle1" style={{ color: "#F0F8FF"}} sx={{ fontStyle: "italic"}}>Your Rating</Typography>
                  <Box
                    sx={{
                      "& > legend": { mt: 1 },
                    }}
                  >
                    <Typography variant="subtitle1" style={{ color: "#F0F8FF"}} sx={{ fontStyle: "italic"}} component="legend">Taste</Typography>
                    <Rating
                      name="TasteRating"
                      precision={0.5}
                      value={taste}
                      onChange={(event, newValue) => {
                        //handleRatingChange(newValue);
                        setTaste(newValue);
                      }}
                    />
                    <Typography variant="subtitle1" style={{ color: "#F0F8FF"}} sx={{ fontStyle: "italic"}} component="legend">Environment</Typography>
                    <Rating
                      name="EnvRating"
                      precision={0.5}
                      value={environment}
                      onChange={(event, newValue) => {
                        setEnvironment(newValue);
                      }}
                    />

                    <Typography variant="subtitle1" style={{ color: "#F0F8FF"}} sx={{ fontStyle: "italic"}} component="legend">Price</Typography>
                    <Rating
                      name="PriceRating"
                      precision={0.5}
                      value={price}
                      onChange={(event, newValue) => {
                        setPrice(newValue);
                      }}
                    />
                    <Typography variant="subtitle1" style={{ color: "#F0F8FF"}} sx={{ fontStyle: "italic"}} component="legend">Overall</Typography>
                    <Rating
                      name="read-only"
                      precision={0.5}
                      value={(price + taste + environment) / 3}
                      readOnly
                    />
                  </Box>
                  <Button variant="contained" size="sm" onClick={() => updateStall(stalls.id)}>
                    Submit
                  </Button>
                  <Button variant="contained" color="success" size="sm" onClick={() => setEdit(false)}>
                    Return
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
