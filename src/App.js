import logo from './logo.svg';
import './App.css';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

function App() {
  const session = useSession() //tokens 
  const supabase = useSupabaseClient //talk to supabase 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
