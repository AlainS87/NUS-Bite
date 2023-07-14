import React from "react";
import {Card, TextField, Box, Typography, Button, CardContent, CardMedia} from '@mui/material';
import { useState } from "react";
import { supabase } from "./supabaseData";
import "./hawkerMainScreen.css";
import {useAuthContext} from "../auth";
import Comments from "./Comments";
import stallcard from "../stallcard.jpg";

function StallInfo(props) {
  const stalls = props.stalls;

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(stalls.name || "");
  const [location, setLocation] = useState(stalls.location || "");
  const [comment, setComment] = useState("");
  const handleDelete = (id) => {
    supabase
      .from("stalls")
      .delete()
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          alert("Failed to delete task!");
        } else {
          alert("Success to delete!");
          window.location.reload();
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
        } else {
          // alert("Success to Update!");
          // window.location.reload();
        }
      });
  };

  return (
    <div className="stallsadded">
      <Card style={{ textAlign: "center", backgroundColor:"#99CCFF"}}>
        <CardContent key="stalls.id">
          {edit === false ? (
            <>
              <CardMedia component="img" sx={{ height: 160, objectFit: "contain" }} image={stallcard}/>
              <Typography variant={'h6'} sx={{ fontStyle: 'italic'}}>Stall Name: {stalls.name}</Typography>
              <Typography variant={'h6'} sx={{ fontStyle: 'italic'}}>Location: {stalls.location}</Typography>
              <Comments stallId={stalls.id}/>
              <br />
              <Button variant={'contained'} onClick={() => handleDelete(stalls.id)}>
                Delete Stall
              </Button>
              <Button style={{marginLeft: '5px'}} variant={'contained'} onClick={() => setEdit(true)}>
                Edit Stall Info
              </Button>
            </>
          ) : (
            <>
              <h4>Edit Stall Info</h4>
              <TextField
                style={{
                  marginTop: '20px'
                }}
                label={'Stall Name'}
                type="text"
                id="name"
                value={name}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <br></br>
              <br></br>
              <Button variant={'contained'} onClick={() => updateStall(stalls.id)}>Submit</Button>
              <Button variant={'contained'} color={'inherit'} size="sm" onClick={() => setEdit(false)}>
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
