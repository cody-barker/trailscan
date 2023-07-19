import React, {useState, useContext} from 'react'
import Error from './Error'
import {UserContext} from '../contexts/UserContext'

function SignUp() {

    const [errors, setErrors] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const {setUser} = useContext(UserContext)

    const [inputState, setInputState] = useState({
        username: "",
        password: "",
        passwordConfirmation: "",
        city: "",
        state: "",
        profileImage: "",
    })

    const {
        username,
        password,
        passwordConfirmation,
        city,
        state,
        profileImage
    } = inputState

    function onInputChange(e){
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        setErrors([])
        setisLoading(true)
        fetch('/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                city,
                state,
                profile_image: profileImage
            })
        }).then((r) => {
            setisLoading(false)
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input
                name="username"
                type="text"
                autoComplete="off"
                value={username}
                onChange={onInputChange}
                ></input>
            </label>
            <label>
                City
                <input
                name="city"
                type="text"
                autoComplete="off"
                value={city}
                onChange={onInputChange}
                ></input>
            </label>
            <label>
                State
                <input
                name="state"
                type="text"
                autoComplete="off"
                value={state}
                onChange={onInputChange}
                ></input>
            </label>
            <label>
                Profile Photo (URL)
                <input
                name="profileImage"
                type="text"
                autoComplete="off"
                value={profileImage}
                onChange={onInputChange}
                ></input>
            </label>
            <label>
                Password
                <input
                name="password"
                type="password"
                autoComplete="off"
                value={password}
                onChange={onInputChange}
                ></input>
            </label>
            <label>
                Password Confirmation
                <input
                name="passwordConfirmation"
                type="password"
                autoComplete="off"
                value={passwordConfirmation}
                onChange={onInputChange}
                ></input>
            </label>

            <button className="login-btn" type="submit">{isLoading? "Loading..." : "Sign Up"}</button>
            <div className="errors-div">
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
            </div>
        </form>
    )
}

export default SignUp