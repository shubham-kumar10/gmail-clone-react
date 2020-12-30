import { IconButton, Checkbox } from '@material-ui/core'
import {
    LabelImportantOutlined,
    StarBorder,
    StarBorderOutlined,
} from '@material-ui/icons'
import './EmailRow.css'
import React, { Component } from 'react'

class EmailRow extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="emailRow">
                <div className="emailRow--options">
                    <Checkbox />
                    <IconButton>
                        <StarBorderOutlined />
                    </IconButton>
                    <IconButton>
                        <LabelImportantOutlined />
                    </IconButton>
                </div>
                <div className="emailRow--title"></div>
                <div className="emailRow--message"></div>
                <div className="emailRow--description"></div>
            </div>
        )
    }
}

export default EmailRow
