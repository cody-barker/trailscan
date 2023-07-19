import {useContext} from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'

function NavBar() {
    
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    const {id} = user

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
            <NavLink to="/"><img className="logo-img" src="https://i.imgur.com/h8odfzA.png" alt="logo"></img></NavLink>
            <NavLink to="/"><h2 className="logo">TrailScan</h2></NavLink>      
            <NavLink className="nav-btn" to="/trails">New Trail</NavLink>
            <NavLink className="split" to={`/user/${id}/reviews`}>Profile</NavLink>
            <button className="nav-btn-split" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    )
}

export default NavBar