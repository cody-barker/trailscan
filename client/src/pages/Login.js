import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

function Login ({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className="wrapper">
            <h1>TrailScan</h1>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <hr></hr>
                    <p>
                        Don't have an account? &nbsp;
                        <button onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin} />
                    <hr></hr>
                    <p>
                        Already have an account? &nbsp;
                        <button onClick={() => setShowLogin(true)}>
                        Log In
                        </button>
                    </p>
                </>
            )}
        </div>
    )
}

export default Login