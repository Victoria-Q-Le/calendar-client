import './App.css';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

function App() {
  const session = useSession() //tokens, when session exists we have a user  
  const supabase = useSupabaseClient() //talk to supabase 

  async function googleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { //scopes allows access to specific part of the provider

      }
    })
  }
  return (
    <div className="App">
      <div style={{width:"400px", margin: "30px auto"}}>
        {/* CHECKING IF SESSION EXISTS */}
        {session 
          ? 
          <>
            <h2>Hey there, {session.user.email}</h2>
          </>
          :
          <>
            <button onClick={() => googleSignIn()}>Sign In With Google</button>
          </>
        }
      </div>
    </div>
  );
}

export default App;
