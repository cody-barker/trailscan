import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { TrailsContext } from '../contexts/TrailsContext'
import { NavLink } from 'react-router-dom'

function UserTrailReview({ review }) {

    const {user, setUser} = useContext(UserContext)
    const {trails, setTrails} = useContext(TrailsContext)
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
            trails: updatedTrails
          }))
        })
        .then(() => {
          const updatedTrails = trails.map((t) => {
            if (t.id === trail_id) {
                let totalReviews = ((t.reviews.reduce((acc, currentValue) => acc + currentValue.trail_rating, 0)) - trail_rating)
                let numOfReviews = t.number_of_reviews - 1
                return ({
                    ...t,
                    reviews: t.reviews.filter((review) => review.id !== id),
                    number_of_reviews: numOfReviews,
                    average_rating: totalReviews === 0 ? 0 : Math.round(totalReviews/numOfReviews * 10)/10
                })
            } else {
                return t
            }
          })
          setTrails(updatedTrails)
        })
      }

    return(
        <div className="review">
            <NavLink to={`/trails/${trail_id}`}>
                <h4 className="review-title">{trailname}</h4>
                <img className="review-thumbnail" src={review.trail_photo} alt="trail"></img>
            </NavLink>
            <p>{formatted_date}</p>
            <p>Rating: {trail_rating}/5</p>
            <p>Conditions: {condition}</p>
            <p>{content}</p>
            <div className="center-row">
              <NavLink to={`/user/${user.id}/reviews/${id}/edit`} className="login-btn twelvepx">Edit</NavLink>
              <button className="login-btn twelvepx" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default UserTrailReview