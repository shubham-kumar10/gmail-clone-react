import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Mail from './Mail'
import EmailList from './EmailList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Composemail from './ComposeMail'

function App() {
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
                            <Composemail />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
