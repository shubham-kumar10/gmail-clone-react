import { Checkbox, IconButton } from '@material-ui/core'
import {
    ArrowDropDown,
    ChevronLeft,
    ChevronRight,
    Inbox,
    KeyboardHide,
    LocalOffer,
    MoreVert,
    People,
    Redo,
    Settings,
} from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow'
import EmailSection from './EmailSection'
import { db } from './firebase'

function EmailList() {
    const [emails, setEmails] = useState([])
    useEffect(() => {
        db.collection('emails')
            .orderBy('timeStamp', 'desc')
            .onSnapshot((snapshot) =>
                setEmails(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    })
    {
        return (
            <div className="emailList">
                <div className="emailList--settings">
                    <div className="emailList--settings-left">
                        <Checkbox />
                        <IconButton>
                            <Redo />
                        </IconButton>
                        <IconButton>
                            <ArrowDropDown />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>

                    <div className="emailList--settings-right">
                        <IconButton>
                            <ChevronLeft />
                        </IconButton>
                        <IconButton>
                            <ChevronRight />
                        </IconButton>
                        <IconButton>
                            <KeyboardHide />
                        </IconButton>
                        <IconButton>
                            <Settings />
                        </IconButton>
                    </div>
                </div>
                <div className="emailList--sections">
                    <EmailSection
                        Icon={Inbox}
                        title="primary"
                        color="red"
                        selected
                    />
                    <EmailSection Icon={People} title="Social" color="blue" />
                    <EmailSection
                        Icon={LocalOffer}
                        title="Promotions"
                        color="green"
                    />
                </div>
                <div className="emailList--list">
                    {emails.map(
                        ({ id, data: { to, subject, message, timeStamp } }) => (
                            <EmailRow
                                id={id}
                                key={id}
                                title={to}
                                subject={subject}
                                description={message}
                                time={new Date(
                                    timeStamp?.seconds * 1000
                                ).toUTCString()}
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default EmailList
