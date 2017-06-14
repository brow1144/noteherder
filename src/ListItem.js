import React, { Component } from 'react'

class ListItem extends Component {
    render() {
        return (
            <li>
                <div className="note">
                    <div className="note-title">
                        {this.props.getTitle}
                    </div>
                    <div className="note-body">
                        <p>
                            {this.props.getMessage}
                        </p>
                    </div>
                </div>
            </li>
        )
    }
}

export default ListItem