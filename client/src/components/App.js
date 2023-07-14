import React, { useEffect, useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import Trails from '../pages/Trails'
import TrailDetail from '../pages/TrailDetail'
import '../styles/App.css';


function App() {
  const [user, setUser] = useState(null)
  const [trails, setTrails] = useState([])

  useEffect(() => {
    fetch("/trails")
    .then((r) => r.json())
    .then((trails) => setTrails(trails))
  }, [])

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  console.log(user)

  if (!user) {
    return <Login onLogin={setUser} />
  }

  return (
      <main>
        <NavBar setUser={setUser}/>
          <Routes>
            <Route
              path="/trails/:id"
              element={<TrailDetail trails={trails} setTrails={setTrails}/>}/>
            <Route 
              path="/login"
              element={<Login onLogin={setUser}/>}/>
            <Route 
              path="/" 
              element={<Trails user={user} setUser={setUser} trails={trails} setTrails={setTrails}/>}/>
          </Routes>
      </main>
  );
}

export default App;
