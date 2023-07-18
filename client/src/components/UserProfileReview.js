import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function UserProfileReview({ review }) {

    const {user, setUser} = useContext(UserContext)

    const {
        id,
        trail_rating,
        condition,
        content,
        formatted_date,
        trailname
    } = review

    function handleDelete() {
        fetch(`/reviews/${id}`, {
            method: "DELETE"
        })
       .then(setUser({
            ...user,
            reviews: user.reviews.filter((review) => {
                return review.id !== id
            })}
        ))
    }

    return(
        <div>
            <h4>{trailname}</h4>
            <p>{formatted_date}</p>
            <p>Rating: {trail_rating}/5</p>
            <p>Conditions: {condition}</p>
            <p>{content}</p>
            <button>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <hr></hr>
        </div>
    )
}

export default UserProfileReview