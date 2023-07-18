import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import Review from '../components/TrailReview'


function UserProfile() {
    const {user} = useContext(UserContext)
    const {
        username,
        city,
        state,
        profile_image
    } = user

    return(
        <>
        <div>
            <img className="profile-photo" src={profile_image} alt="profile"></img>
            <h3>{username}</h3>
            <p>{city}, {state}</p>
        </div>
        <hr></hr>
        <div>
            <h3>Reviews</h3>
           {user.reviews.map((review) => {
                return <Review key={review.id} review={review}/>
            })}
        </div>
        </>


    )
}

export default UserProfile