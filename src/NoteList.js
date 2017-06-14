import React, { Component } from 'react'
import './NoteList.css'
import ListItem from './ListItem'

class NoteList extends Component {    
    render() {
        return (
            <div className="NoteList">
                <h3>Notes</h3>
                <ul id="notes">
                    <ListItem 
                        getTitle={this.props.getTitle}
                        getMessage={this.props.getMessage}
                    />
                </ul>
            </div>
        )
    }
}

export default NoteList