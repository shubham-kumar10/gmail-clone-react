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
import React, { Component } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow'
import EmailSection from './EmailSection'

class EmailList extends Component {
    render() {
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
                    <EmailRow
                        title="Twitch"
                        subject="Hey"
                        description="Test"
                        time="10pm"
                    />
                </div>
            </div>
        )
    }
}

export default EmailList
