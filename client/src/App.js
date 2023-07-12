import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import SignUp from './SignUp'
import Home from './Home'
import './App.css';

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
