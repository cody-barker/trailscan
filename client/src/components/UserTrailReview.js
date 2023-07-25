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

    const trail = trails.find((trail) => {
       return trail.id === trail_id
    })

    console.log(user)


    function handleDelete() {
        fetch(`/reviews/${id}`, {
            method: "DELETE"
        })
       .then(setUser({
            ...user,
            reviews: user.reviews.filter((review) => {
                return review.id !== id
            }),
            trails: user.trails.filter((t) => {
                return t.id !== trail_id
            })
        }))
        .then(() => {
            trail.reviews = trail.reviews.filter((review) => {
                return review.id !== id
            })
            const updatedTrails = trails.map((t) => {
                if (t.id === trail_id) {
                    return trail
                } else {
                    return t
                }
            })
            setTrails(updatedTrails)
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