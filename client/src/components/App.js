import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import SignUp from './SignUpForm'
import Home from '../pages/Home'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route 
          path="/" 
          element={<Home/>}/>
        <Route 
          path="/signup"
          element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
