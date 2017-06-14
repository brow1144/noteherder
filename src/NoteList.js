import React from 'react'
import './NoteList.css'
import ListItem from './ListItem'

const NoteList = () => {
    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">

            <ListItem />

            </ul>
        </div>
    )
}

export default NoteList