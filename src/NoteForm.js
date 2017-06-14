import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    constructor() {
        super()

        this.state = {
            notes: {
                title: '',
                message: '',
            },
        }

        this.onTitleChange = this.onTitleChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
    }

    onTitleChange(ev) {
        let updatedNotes = this.state.notes
        updatedNotes.title = ev.target.value
        
        this.setState({
            notes: updatedNotes
        })
    }

    onMessageChange(ev) {
        let updatedNotes = this.state.notes
        updatedNotes.message = ev.target.value
        
        this.setState({
            notes: updatedNotes
        })
    } 

    render() {
        return (
            <div className="NoteForm">
                <form>
                <p>
                    <input 
                        value={this.state.notes.title} 
                        onChange={this.onTitleChange} 
                        type="text" name="title" 
                        placeholder="Title your note" 
                    />
                </p>
                <p>
                    <textarea 
                        onChange={this.onMessageChange}
                        name="body" 
                        cols="30" 
                        rows="10" 
                        placeholder="Just start typing...">
                    </textarea>
                </p>
                </form>
            </div>
        )
    }
}

export default NoteForm