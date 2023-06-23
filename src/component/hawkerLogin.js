import "../index.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseData";
import { useNavigate } from "react-router-dom";

export const HawkerLogin = () => {
  const navigate = useNavigate();
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
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
        <button onClick={signInWithGoogle}>SignIn</button>
      </div>
    );
  } else {
    return navigate("HawkerMain");
  }
};
