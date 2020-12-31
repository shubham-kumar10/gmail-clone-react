import { IconButton, Checkbox } from '@material-ui/core'
import {
    LabelImportantOutlined,
    StarBorder,
    StarBorderOutlined,
} from '@material-ui/icons'
import './EmailRow.css'
import { useHistory } from 'react-router-dom'

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory()
    return (
        <div className="emailRow" onClick={() => history.push('/inbox')}>
            <div className="emailRow--options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailRow--title">{title}</div>
            <div className="emailRow--message">
                <h4>
                    {subject}
                    <span className="emailRow--description">
                        {'  -  '}
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow--time">{time}</p>
        </div>
    )
}

export default EmailRow
