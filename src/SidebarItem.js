import React, { Component } from 'react';
import './SidebarItem.css';

class SidebarItem extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={`sidebarItem ${this.selected && 'sidebarItem--active'}`}>
                <this.props.Icon/>
                <h2>{this.props.text}</h2>
                <p>{this.props.number}</p>
            </div>
        );
    }
}

export default SidebarItem;