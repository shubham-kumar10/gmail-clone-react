import React, { Component } from 'react'
import './EmailSection.css'

class EmailSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div
                className={`section ${
                    this.props.selected && 'section--selected'
                }`}
                style={{
                    borderBottom: `3px solid ${this.props.color}`,
                    color: `${this.props.selected && this.props.color}`,
                }}
            >
                <this.props.Icon />
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export default EmailSection
