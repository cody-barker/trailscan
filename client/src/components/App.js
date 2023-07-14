import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import SignUp from './SignUpForm'
import Trails from '../pages/Trails'
import TrailDetail from '../pages/TrailDetail'
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

  useEffect(() => {
    fetch("/trails")
    .then((r) => r.json())
    .then((trails) => setTrails(trails))
}, [])

const [trails, setTrails] = useState([])

  if (!user) return <Login onLogin={setUser} />

  return (
    <>
      <NavBar setUser={setUser}/>
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Trails user={user} trails={trails} setTrails={setTrails}/>}/>
          <Route 
            path="/signup"
            element={<SignUp />}/>
          <Route 
            path="/trails/:id"
            element={<TrailDetail trails={trails} setTrails={setTrails}/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
