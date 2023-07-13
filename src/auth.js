import {createContext, useContext, useEffect, useState} from "react";
import { supabase } from "./component/supabaseData";
const AuthContext = createContext();

const useAuth = () => {
  const [userData, setUserData] = useState(null);
  return {
    userData,
    login: (userData) => {
      setUserData(userData);
    },
    logout: () => {
      setUserData(null);
    }
  }
}

export const AuthProvider = ({children}) => {
  const auth = useAuth();
  const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        auth.login(session.user)
      }
      setSession(session)
    })
  }, [])
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext);
}
