import React, { useEffect, useState, useContext } from 'react'
import {Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import Trails from '../pages/Trails'
import TrailDetail from '../pages/TrailDetail'
import '../styles/App.css';
import { UserContext } from '../contexts/UserContext'

function App() {
  const [trails, setTrails] = useState([])
  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    fetch("/trails")
    .then((r) => r.json())
    .then((trails) => setTrails(trails))
  }, [])

  console.log(user)

  if (!user) {
    return <Login />
  }

  return (
      <main>
        <NavBar />
          <Routes>
            <Route
              path="/trails/:id"
              element={<TrailDetail trails={trails}/>}/>
            <Route 
              path="/login"
              element={<Login />}/>
            <Route 
              path="/" 
              element={<Trails trails={trails}/>}/>
          </Routes>
      </main>
  );
}

export default App;
