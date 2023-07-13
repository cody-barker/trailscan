import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import SignUp from './SignUpForm'
import Trails from '../pages/Trails'
import '../styles/App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <Login onLogin={setUser} />

  return (
    <>
      <NavBar setUser={setUser}/>
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Trails user={user}/>}/>
          <Route 
            path="/signup"
            element={<SignUp />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
