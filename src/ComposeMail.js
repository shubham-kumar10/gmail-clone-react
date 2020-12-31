import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import './ComposeMail.css'

function Composemail() {
    return (
        <div class="compose">
            <div className="compose--header">
                <h3>New Message</h3>
                <Close className="compose--header-icon" />
            </div>
            <form className="compose--form">
                <input type="text" placeholder="To" />
                <input type="text" placeholder="Subject" />
                <input
                    type="text"
                    placeholder="Message"
                    className="compose--form-message"
                />

                <div className="compose--footer">
                    <Button class="compose--footer-button">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default Composemail
