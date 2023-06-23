import "../index.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseData";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div>
        <button onClick={signInWithGoogle}>Sign In</button>
      </div>
    );
  } else {
    return navigate("mainScreen");
  }
};
