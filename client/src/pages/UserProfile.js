import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import UserTrailReview from '../components/UserTrailReview.js'


function UserProfile() {
    const {user} = useContext(UserContext)
    const {
        username,
        city,
        state,
        profile_image
    } = user

    return(
        <div className="profile-container">
            <div>
                <img className="profile-photo" src={profile_image} alt="profile"></img>
                <h3>{username}</h3>
                <p>{city}, {state}</p>
            </div>
            <hr></hr>
            <h3>Trails Hiked</h3>
            <div>
                    {user.uniq_user_trail_names.map((name) => {
                        return <p key={name}>{name}</p>
                    })}
            </div>
            <hr></hr>
            <div>
                <h3>Reviews</h3>
                <hr></hr>
            {user.reviews.sort((a,b) => (a.date < b.date) ? 1 : -1).map((review) => {
                    return <UserTrailReview key={review.id} review={review}/>
                })}
            </div>
        </div>


    )
}

export default UserProfile