import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

function Login ({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className="wrapper">
            <h1>TrailScan</h1>
            {showLogin ? (
                <>
                    <LoginForm setUser={setUser} />
                    <hr></hr>
                    <p>
                        Don't have an account? &nbsp;
                        <button className="login-btn" onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <SignUpForm setUser={setUser} />
                    <hr></hr>
                    <p>
                        Already have an account? &nbsp;
                        <button className="login-btn" onClick={() => setShowLogin(true)}>
                        Log In
                        </button>
                    </p>
                </>
            )}
        </div>
    )
}

export default Login