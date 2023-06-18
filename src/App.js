import './App.css';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';

function App() {
  const session = useSession() //tokens, when session exists we have a user  
  const supabase = useSupabaseClient() //talk to supabase 
  const {isLoading} = useSessionContext()

  if(isLoading){ //this is to avoid the web to flickering after reload. Because when refresh aka to context the app original will be null, this is to go around that issue
    return <></>
  }

  async function googleSignIn() {
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { //scopes allows access to specific part of the provider
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    })
    if (error){
      alert("Error logging in to ther provider with supabse")
      console.log(error)
    }
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  console.log(session)

  return (
    <div className="App">
      <div style={{width:"400px", margin: "30px auto"}}>
        {/* CHECKING IF SESSION EXISTS */}
        {session 
          ? 
          <>
            <h2>Hey there, {session.user.email}</h2>
            <button onClick={() => signOut()}></button>
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
