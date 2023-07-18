import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'


function UserProfile() {
    const {user} = useContext(UserContext)
    const {
        username,
        city,
        state,
        profile_image
    } = user

    return(
        <div>
            <img className="profile-photo" src={profile_image} alt="profile photo"></img>
            <h3>{username}</h3>
            <p>{city}, {state}</p>
        </div>

    )
}

export default UserProfile