import React, {useState } from 'react'
import Error from './Error'

function LoginForm ({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then((r) => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((user) => onLogin(user))
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
                onChange={(e) => setUsername(e.target.value)}
                ></input>
            </label>
            <label>
                Password
                <input
                name="password"
                type="text"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </label>

            <button type="submit">{isLoading? "Loading..." : "Login"}</button>

                {/* {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))} */}
    
        </form>

    )
}

export default LoginForm