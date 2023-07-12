import React, {useState} from 'react'

function SignUp() {

    const [inputState, setInputState] = useState({
        username: "",
        password: "",
        passwordConfirmation: ""
    })

    const {
        username,
        password,
        passwordConfirmation
    } = inputState

    function onInputChange(e){
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    function onSignUp(e){
        e.preventDefault()
        fetch('')
    }

    return(
        <div id="signup-container">
            <form onSubmit={onSignUp}>
                <label>
                    Username
                    <input
                    name="username"
                    type="text"
                    value={username}
                    onChange={onInputChange}
                    ></input>
                </label>
                <label>
                    Password
                    <input
                    name="password"
                    type="text"
                    value={password}
                    onChange={onInputChange}
                    ></input>
                </label>
                <label>
                    Password Confirmation
                    <input
                    name="passwordConfirmation"
                    type="text"
                    value={passwordConfirmation}
                    onChange={onInputChange}
                    ></input>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp