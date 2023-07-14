import React from 'react'
import { Card, Button, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { supabase } from "./supabaseData";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LikeButton from "./LikeButton";
import Comments from "./Comments";
export const VisitorContent = (props) => {
    const stalls = props.stalls;
    return (
        <Box width={'400px'} padding={'20px'}>
            <Card variant='outlined'>
                <CardContent>
                    <Typography>Stall Name: {stalls.name}</Typography>
                    <Typography>Location: {stalls.location}</Typography>
                    <Typography>Price: {(stalls.price / stalls.customers).toFixed(2)}</Typography>
                    <Typography>Taste: {(stalls.taste / stalls.customers).toFixed(2)}</Typography>
                    <Typography>Environment: {(stalls.environment / stalls.customers).toFixed(2)}</Typography>
                    <LikeButton stallId={stalls.id}/>
                    <Comments stallId={stalls.id}/>
                </CardContent>
            </Card>
        </Box>
    )
}
