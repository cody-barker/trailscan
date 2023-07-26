import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { NavLink } from 'react-router-dom'

function UserTrailReview({ review }) {

    const {user, setUser} = useContext(UserContext)
    const {
        id,
        trail_id,
        trail_rating,
        condition,
        content,
        formatted_date,
        trailname
    } = review

    function handleDelete() {
        fetch(`/reviews/${id}`, {
          method: "DELETE",
        }).then(() => {
          const updatedUser = {
            ...user,
            reviews: user.reviews.filter((review) => review.id !== id),
          }
          setUser(updatedUser)

          const otherReviewsOfTrail = updatedUser.reviews.some(
            (review) => review.trail_id === trail_id
          )
    
          const updatedTrails = otherReviewsOfTrail
            ? user.trails
            : user.trails.filter((trail) => trail.id !== trail_id)
    
          setUser((user) => ({
            ...user,
            trails: updatedTrails,
          }))
        })
      }

    return(
        <div>
            <NavLink to={`/trails/${trail_id}`}>
                <h4 className="review-title">{trailname}</h4>
                <img className="review-thumbnail" src={review.trail_photo} alt="trail"></img>
            </NavLink>
            <p>{formatted_date}</p>
            <p>Rating: {trail_rating}/5</p>
            <p>Conditions: {condition}</p>
            <p>{content}</p>
            <NavLink to={`/user/${user.id}/reviews/${id}/edit`} className="underline">Edit</NavLink>
            <p className="underline" onClick={handleDelete}>Delete</p>
            <hr></hr>
        </div>
    )
}

export default UserTrailReview