import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SendIcon from '@material-ui/icons/Send'
import NoteIcon from '@material-ui/icons/Note'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import React, { Component } from 'react'
import './Sidebar.css'
import SidebarItem from './SidebarItem'
import { useDispatch } from 'react-redux'
import { openCompose } from './features/mailSlice'

function Sidebar() {
    const dispatch = useDispatch()

    {
        return (
            <div className="sidebar">
                <Button
                    startIcon={<AddIcon className="sidebar--compose-add" />}
                    className="sidebar--compose"
                    onClick={() => dispatch(openCompose())}
                >
                    Compose
                </Button>

                <SidebarItem
                    Icon={InboxIcon}
                    text="Inbox"
                    number={54}
                    selected={true}
                />
                <SidebarItem Icon={StarIcon} text="Starred" number={54} />
                <SidebarItem Icon={AccessTimeIcon} text="Snoozed" number={54} />
                <SidebarItem Icon={SendIcon} text="Sent" number={54} />
                <SidebarItem Icon={NoteIcon} text="Drafts" number={54} />
                <SidebarItem Icon={ExpandMoreIcon} text="More" number={54} />

                <div className="sidebar--footer">
                    <div className="sidebar--footer-icons">
                        <IconButton>
                            <PersonIcon />
                        </IconButton>
                        <IconButton>
                            <DuoIcon />
                        </IconButton>
                        <IconButton>
                            <PhoneIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
