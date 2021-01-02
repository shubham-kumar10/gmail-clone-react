import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Mail from './Mail'
import EmailList from './EmailList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Composemail from './ComposeMail'
import { selectIsComposeOpen } from './features/mailSlice'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, selectUser } from './features/userSlice'
import Login from './Login'
import { auth } from './firebase'

function App() {
    const isComposeOpen = useSelector(selectIsComposeOpen)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(
                    logIn({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                )
            } else {
            }
        })
    }, [])

    return (
        <Router>
            {!user ? (
                <Login />
            ) : (
                <div className="App">
                    <Header />
                    <div className="app--body">
                        <Sidebar />

                        <Switch>
                            <Route path="/inbox">
                                <Mail />
                            </Route>
                            <Route path="/">
                                <EmailList />
                            </Route>
                        </Switch>
                    </div>
                    {isComposeOpen && <Composemail />}
                </div>
            )}
        </Router>
    )
}

export default App
