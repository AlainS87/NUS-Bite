import '/Users/hayashi/Desktop/Orbital2023/NUS-Bite-Orbital2023/my-app/src/index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from './supabaseData'
import { Main } from './MainSreen'

//const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>')

export const Login = () => {
    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          redirectTo: `http://localhost:3000/mainScreen`
        })
    }
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<div>
        <button onClick={signInWithGoogle}>
            SignIn
        </button>
    </div>)
  }
  else {
    return (<Main />)
  }
}