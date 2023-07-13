import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({setUser}) {
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }

    return(
        <nav id="navbar">
            <h1>
                <Link to="/">TrailScan</Link>
            </h1>
            <nav>
                <button as={Link} to="/new">
                    New Trail
                </button>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </nav>
    )
}

export default NavBar