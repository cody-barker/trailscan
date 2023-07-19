import React, { useContext } from 'react'
import {Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import Trails from '../pages/Trails'
import TrailDetail from '../pages/TrailDetail'
import '../styles/App.css';
import { UserContext } from '../contexts/UserContext'
import { TrailsProvider } from '../contexts/TrailsContext'
import UserProfile from '../pages/UserProfile'
import ReviewEdit from '../pages/ReviewEdit'
import ReviewCreate from '../pages/ReviewCreate'
import TrailCreate from '../pages/TrailCreate'

function App() {
  const {user} = useContext(UserContext)
  if (!user) {
    return <Login />
  }

  console.log(user)

  return (
    <TrailsProvider>
      <main>
        <NavBar />
          <Routes>
            <Route 
              path="/user/:uid/reviews/:id/edit"
              element={<ReviewEdit />}
            />
            <Route
              path="/user/:id/reviews"
              element={<UserProfile />}
            />
            <Route
              path="/trails/:id/reviews"
              element={<ReviewCreate />}
            />
            <Route
              path="/trails/:id"
              element={<TrailDetail />}/>
            <Route 
              path="/trails"
              element={<TrailCreate />}
            />
            <Route 
              path="/login"
              element={<Login />}/>
            <Route 
              path="/" 
              element={<Trails />}/>
          </Routes>
      </main>
    </TrailsProvider>
  );
}

export default App;
