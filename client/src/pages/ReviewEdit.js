import { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import Error from '../components/Error'


function ReviewEdit() {

    const {user, setUser} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    let {id} = useParams()
    id = parseInt(id)
    const navigate = useNavigate()
    
    const review = user.reviews.find((review) => {
        return review.id === id
    })

    const [inputState, setInputState] = useState({
        trailRating: review.trail_rating,
        date: review.date,
        condition: review.condition,
        content: review.content
    })

    const {
        trailRating,
        date,
        condition,
        content
    } = inputState    

    function onInputChange(e){
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                trail_rating: trailRating,
                date,
                condition,
                content
            })
        })
        .then(r => {
            if (r.ok) {
                r.json().then(updatedReview => {
                    setUser({...user,
                        reviews: [...user.reviews.map((review) => {
                             if (review.id === id) {
                                return updatedReview
                            } else {
                                return review
                            }
                        })]
                    })
                    setErrors([])
                    navigate(`/user/${user.id}/reviews`)
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return(
        <div>
            <form className="review-edit-form" onSubmit={handleSubmit}>
                <h2>{review.trailname}</h2>
                <label>
                    Trail Rating (out of 5)
                    <input
                    name="trailRating"
                    type="number"
                    autoComplete="off"
                    value={trailRating}
                    onChange={onInputChange}
                    />
                </label>
                <label>
                    Date
                    <input
                    name="date"
                    type="date"
                    autoComplete="off"
                    value={date}
                    onChange={onInputChange}
                    />
                </label>
                <label>
                    Trail Condition
                    <input
                    name="condition"
                    type="text"
                    autoComplete="off"
                    value={condition}
                    onChange={onInputChange}
                    />
                </label>
                <label>
                    Review
                    <textarea
                    className="review-text-box"
                    name="content"
                    type="text"
                    autoComplete="off"
                    value={content}
                    onChange={onInputChange}
                    />
                </label>
                <button>Post</button>
                <div className="errors-div">
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
            </div>
            </form>
        </div>
    )
}

export default ReviewEdit