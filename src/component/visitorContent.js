import React from 'react'
import { Card, Button, CardActions, CardContent, Typography, CardMedia } from "@mui/material";
import { useState } from "react";
import { supabase } from "./supabaseData";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LikeButton from "./LikeButton";
import Comments from "./Comments";
import stallcard from "../stallcard.jpg";

export const VisitorContent = (props) => {
    const stalls = props.stalls;
    return (
        <Box width={'400px'} padding={'10px'}>
            <Card variant='outlined' style={{backgroundColor:"#99CCFF"}}>
                <CardContent>
                <CardMedia component="img" sx={{ height: 130, objectFit: "contain" }} image={stallcard}/>
                    <Typography style={{ color: "#004C99"}}>Stall Name: {stalls.name}</Typography>
                    <Typography style={{ color: "#004C99"}}>Location: {stalls.location}</Typography>
                    <Typography style={{ color: "#004C99"}}>Price: {(stalls.price / stalls.customers).toFixed(2)}</Typography>
                    <Typography style={{ color: "#004C99"}}>Taste: {(stalls.taste / stalls.customers).toFixed(2)}</Typography>
                    <Typography style={{ color: "#004C99"}}>Environment: {(stalls.environment / stalls.customers).toFixed(2)}</Typography>
                    <LikeButton stallId={stalls.id}/>
                    <Comments stallId={stalls.id}/>
                </CardContent>
            </Card>
        </Box>
    )
}
