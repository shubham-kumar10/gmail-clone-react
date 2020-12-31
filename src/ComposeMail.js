import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import './ComposeMail.css'
import { closeCompose } from './features/mailSlice'

function Composemail() {
    const { register, handleSubmit, watch, errors } = useForm()
    const dispatch = useDispatch()
    const onFormSubmit = (formData) => {}
    return (
        <div class="compose">
            <div className="compose--header">
                <h3>New Message</h3>
                <Close
                    className="compose--header-icon"
                    onClick={() => dispatch(closeCompose())}
                />
            </div>
            <form
                className="compose--form"
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <input
                    name="sender"
                    type="email"
                    placeholder="To"
                    ref={register({ required: true })}
                />
                {errors.sender && (
                    <p className="compose--form-error">
                        Sender email is required
                    </p>
                )}
                <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    ref={register({ required: true })}
                />
                <input
                    name="message"
                    type="text"
                    placeholder="Message"
                    ref={register({ required: true })}
                    className="compose--form-message"
                />
                <div className="compose--footer">
                    <Button
                        class="compose--footer-button"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Composemail
