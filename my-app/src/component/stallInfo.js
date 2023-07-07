import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { supabase } from "./supabaseData";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import "./hawkerMainScreen.css";

function StallInfo(props) {
  const stalls = props.stalls;

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");

  const handleDelete = (id) => {
    supabase
      .from("stalls")
      .delete()
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          alert("Failed to delete task!");
        }
      });
  };

  const updateStall = (id) => {
    supabase
      .from("stalls")
      .update({
        name: name,
        location: location,
        comment: comment,
      })
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          console.log(error.message);
          alert("Failed to update task!");
        }
      });
  };

  return (
    <div className="stallsadded">
      <Card variant="outlined" style={{ textAlign: "center" }}>
        <CardContent style={{backgroundColor: "#3264B3"}} key="stalls.id">
          {edit === false ? (
            <>
              <Typography variant="body1" style={{ color: "#F0F8FF"}}>Stall Name: {stalls.name}</Typography>
              <Typography variant="body1"  style={{ color: "#F0F8FF"}}>Location: {stalls.location}</Typography>
              <Typography variant="body1" style={{ color: "#F0F8FF"}}>Comment: {stalls.comment}</Typography>
              <Button variant="contained" color="error" onClick={() => handleDelete(stalls.id)}>
                Delete Stall
              </Button>
              <Button variant="contained" onClick={() => setEdit(true)}>
                Edit Stall Info
              </Button>
            </>
          ) : (
            <>
              <h4>Edit Stall Info</h4>
              <Typography style={{ color: "#F0F8FF"}}>Stall Name</Typography>
              <TextField
                type="text"
                id="name"
                size="small"
                variant="standard"
                defaultValue={stalls.name}
                onChange={(e) => setName(e.target.value)}
              />
              <br></br>
              <Typography style={{ color: "#F0F8FF"}}>Stall Location</Typography>
              <TextField
                type="text"
                id="location"
                size="small"
                variant="standard"
                defaultValue={stalls.location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <br></br>
              <Typography style={{ color: "#F0F8FF"}}>Comment</Typography>
              <TextField
                type="text"
                id="comment"
                size="small"
                variant="standard"
                onChange={(e) => setComment(e.target.value)}
              />
              <br></br>
              <Button variant="contained" onClick={() => updateStall(stalls.id)}>Submit</Button>
              <Button variant="contained" onClick={() => setEdit(false)}>
                Return
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
export default StallInfo;
