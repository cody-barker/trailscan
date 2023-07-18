import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import Error from '../components/Error'


function EditReviewPage() {

    const {user, setUser} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    let {id} = useParams()
    id = parseInt(id)
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
        fetch(`/reviews/${id}`)
    }

    console.log(review)
    return(
        <div>
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

export default EditReviewPage