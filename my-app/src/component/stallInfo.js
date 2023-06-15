import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { supabase } from "./supabaseData";
import "./hawkerMainScreen.css";

function StallInfo(props) {
  const stalls = props.stalls;

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [taste, setTaste] = useState(0);
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
        price: price,
        taste: taste,
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
      <Card style={{ textAlign: "center" }}>
        <Card.Body key="stalls.id">
          {edit === false ? (
            <>
              <Card.Title>Stall Name: {stalls.name}</Card.Title>
              <Card.Text>Location: {stalls.location}</Card.Text>
              <Card.Text>Price: {stalls.price}</Card.Text>
              <Card.Text>Taste: {stalls.taste}</Card.Text>
              <Card.Text>Comment: {stalls.comment}</Card.Text>
              <Button variant="danger" onClick={() => handleDelete(stalls.id)}>
                Delete Stall
              </Button>
              <Button variant="secondary" onClick={() => setEdit(true)}>
                Edit Stall Info
              </Button>
            </>
          ) : (
            <>
              <h4>Edit Stall Info</h4>
              <Button size="sm" onClick={() => setEdit(false)}>
                Return
              </Button>
              <br></br>
              <Form.Label>Stall Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                defaultValue={stalls.name}
                onChange={(e) => setName(e.target.value)}
              />
              <br></br>
              <Form.Label>Stall Location</Form.Label>
              <Form.Control
                type="text"
                id="location"
                defaultValue={stalls.location}
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
              <button onClick={() => updateStall(stalls.id)}>Submit</button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default StallInfo;
