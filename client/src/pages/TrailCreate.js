import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../components/Error'
import { TrailsContext } from '../contexts/TrailsContext'

function TrailCreate() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const {trails, setTrails} = useContext(TrailsContext)
    const [inputState, setInputState] = useState({
        name: "",
        length: "",
        coordinates: "",
        description: "",
        photo: "",
        difficulty: "",
        dogsAllowed: "",
        familyFriendly: "",
    })

    const {
        name,
        length,
        coordinates,
        description,
        photo,
        difficulty,
        dogsAllowed,
        familyFriendly
    } = inputState

    function onInputChange(e){
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/trails', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,
                length,
                difficulty,
                family_friendly: familyFriendly,
                dogs_allowed: dogsAllowed,
                trailhead_coordinates: coordinates,
                description,
                photo
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then((newTrail) => {
                    setTrails(
                        [...trails, newTrail]
                    )
                    navigate('/')
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    console.log(dogsAllowed)

    return(
            <form className="review-edit-form" onSubmit={handleSubmit}>
                <label>
                    Trail Name
                    <input
                    name="name"
                    type="text"
                    autoComplete="off"
                    value={name}
                    onChange={onInputChange}
                    />
                </label>
                <label>
                    Length (mi)
                    <input
                    name="length"
                    type="text"
                    autoComplete="off"
                    value={length}
                    onChange={onInputChange}
                    />
                </label>
                <label>
                    Difficulty
                    <select className="select" name="difficulty" value={difficulty} onChange={onInputChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="Easy">Easy</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Hard">Hard</option>
                    </select>
                </label>
                <label>
                    Family Friendly
                    <select className="select" name="familyFriendly" value={familyFriendly} onChange={onInputChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>
                <label>
                    Dogs Allowed
                    <select className="select" name="dogsAllowed" value={dogsAllowed} onChange={onInputChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>
                <label>
                    Trailhead Coordinates
                    <input
                    name="coordinates"
                    type="text"
                    autoComplete="off"
                    value={coordinates}
                    onChange={onInputChange}
                    />
                </label>
                <label>
                    Description
                    <input
                    name="description"
                    type="text"
                    autoComplete="off"
                    value={description}
                    onChange={onInputChange}
                    />
                </label>
                <label>
                    Trail Photo (URL)
                    <input
                    name="photo"
                    type="text"
                    autoComplete="off"
                    value={photo}
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
    )
}
export default TrailCreate