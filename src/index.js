import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient(
  "https://gsmnxndgtuyrirhiwqlj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzbW54bmRndHV5cmlyaGl3cWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2Njg1ODYsImV4cCI6MjAwMjI0NDU4Nn0.9sNqyLgivpokVgNayHrJFhvkKMQrQ2uFmj_x18m-kUA"
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Allow the app to talk to supabase in any compononent */}
    <SessionContextProvider supabaseClient={supabase}> 
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
