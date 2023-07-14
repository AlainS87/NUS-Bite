import "../index.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseData";
import { useNavigate } from "react-router-dom";
import {useAuthContext} from "../auth";
import { Button, Card, CardMedia, Box, CardContent, Typography} from "@mui/material";
import "./profile.css";
import stallcard from "../stallcard.jpg";

export const Login = () => {
  const navigate = useNavigate();

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

  }
  //   async function signUp() {
  //     return supabase.auth.signUp(
  //         {
  //         email: 'example@email.com',
  //         password: 'example-password',
  //         options: {
  //             data: {
  //             first_name: 'John',
  //             age: 27,
  //             }
  //         }
  //         }
  //     )
  //   }
  const [session, setSession] = useState(null);
  const {login} = useAuthContext();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session && session.user) {
        console.log(session.user);
        login(session.user);
      }
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="login">
        <Card className="photo" style={{backgroundColor:"#99CCFF"}}>
          <CardMedia component="img" sx={{ height: 500, objectFit: "contain" }} image={stallcard}></CardMedia>
          <CardContent>
            <Typography variant="h3" style={{ color: "#F0F8FF"}}>Welcome!</Typography>
          </CardContent>
          <Button variant="contained" size="large" onClick={signInWithGoogle}>Sign In</Button>
        </Card>
      </div>
    );
  } else {
    return navigate("mainScreen");
  }
};
