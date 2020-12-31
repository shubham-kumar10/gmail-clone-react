import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Mail from './Mail'
import EmailList from './EmailList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Composemail from './ComposeMail'
import { selectIsComposeOpen } from './features/mailSlice'
import { useSelector } from 'react-redux'

function App() {
    const isComposeOpen = useSelector(selectIsComposeOpen)
    return (
        <Router>
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
        </Router>
    )
}

export default App
