import React from 'react'
import './Login.css'
import logo from './assets/images/logo_big.png'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useDispatch } from 'react-redux'
import { logIn } from './features/userSlice'

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(
                    logIn({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                )
            })
            .catch((error) => alert(error.meesage))
    }
    return (
        <div>
            <div className="login--header">
                <div className="login--header-left">
                    <img src={logo} alt />
                </div>
                <div className="login--header-right">
                    <Button
                        className="login--header-buttons"
                        variant="contained"
                        color="primary"
                        onClick={signIn}
                    >
                        Login
                    </Button>
                    <Button
                        className="login--header-buttons"
                        variant="contained"
                        color="primary"
                        disabled="true"
                        onClick={signIn}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>

            <div className="login">
                <div className="login--body">
                    <h1>This is a react application to demo Gmail UI/UX.</h1>
                    <p>
                        Please click 'Login' Button for Logging In the app using
                        your gmail account. The authentication is based on
                        Firebase Google Auth. We will not be storing your acount
                        details.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
