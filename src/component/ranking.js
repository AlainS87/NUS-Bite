import React from 'react'
import ResponsiveAppBar from "../Appbar";
import { supabase } from "./supabaseData";
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect, useCallback } from "react";
import { VisitorContent } from './visitorContent';
import {useParams} from "react-router-dom";
import Box from "@mui/material/Box";

export const Ranking = () => {
    const [stalls, setStalls] = useState(null);
    const [error, setError] = useState(null);
    const {type} = useParams();
    const getStalls = useCallback(() => {

        if (type === 'price') {
          supabase
            .from("stalls")
            .select()
            .order("averageprice", { ascending: false })
            .then(({ data: stalls, error }) => {
              setStalls(stalls);
              setError(error);
            })
            .catch((error) => {
              setError(error);
            });
        }


        if (type === 'taste') {
          supabase
            .from("stalls")
            .select()
            .order("averagetaste", { ascending: false })
            .then(({ data: stalls, error }) => {
              setStalls(stalls);
              setError(error);
            })
            .catch((error) => {
              setError(error);
            });
        }


        if (type === 'total') {
          supabase
            .from("stalls")
            .select()
            .order("averageprice", { ascending: false })
            .order("averagetaste", { ascending: false })
            .then(({ data: stalls, error }) => {
              setStalls(stalls);
              setError(error);
            })
            .catch((error) => {
              setError(error);
            });
        }


    }, [setStalls, setError, type]);

    useEffect(() => {
        getStalls();
    }, [getStalls]);

  return (
    <div>
        <ResponsiveAppBar />
        <h3>
          {type.toUpperCase()} RANKING
        </h3>
        <Container>
        <Box display={'flex'} flexWrap={'wrap'}>
          {stalls &&
            stalls.map((stalls) => (
              <div>
                <VisitorContent stalls={stalls} />
              </div>
            ))}
        </Box>
        </Container>
    </div>
  )
}
