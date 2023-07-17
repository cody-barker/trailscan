import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavBar({setUser}) {

    const navigate = useNavigate()

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null)
                navigate("/")
            }
        })
    }

    return(
        <nav id="navbar">
          <Link to="/"><img className="logo-img" src="https://i.imgur.com/h8odfzA.png" alt="logo"></img></Link>
          <Link to="/"><h2 className="logo">TrailScan</h2></Link>      
            <button className="nav-btn" as={Link} to="/new">
                New Trail
            </button>
            <button className="nav-btn" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    )
}

export default NavBar