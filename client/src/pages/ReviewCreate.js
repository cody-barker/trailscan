import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TrailsContext } from '../contexts/TrailsContext'
import { UserContext } from '../contexts/UserContext'
import Error from '../components/Error'

function ReviewCreate() {

    let {id} = useParams()
    id = parseInt(id)
    const {trails} = useContext(TrailsContext)
    const {user, setUser} = useContext(UserContext)
    const trail = trails.find((trail) => {
        return trail.id === id
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const today = new Date()
    today.setDate(today.getDate())
    const formattedToday = today.toISOString().substring(0,10)

    const [inputState, setInputState] = useState({
        trailRating: "",
        date: formattedToday,
        condition: "",
        content: ""
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

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/trails/${id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
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
                r.json().then(newReview => {
                    setUser({
                        ...user,
                        reviews: [
                            newReview, ...user.reviews
                        ]
                    })
                    setErrors([])
                    navigate(`/trails/${id}`)
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    if (!trail) {
        return (
            "Loading..."
        )
    }

    return(
        <div>
            <h2>{trail.name}</h2>
            <form className="review-edit-form" onSubmit={handleSubmit}>
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

export default ReviewCreate