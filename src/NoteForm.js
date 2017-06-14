import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    render() {
        return (
            <div className="NoteForm">
                <form>
                <p>
                    <input 
                        value={this.props.getTitle} 
                        onChange={this.props.titleChange} 
                        type="text" name="title" 
                        placeholder="Title your note" 
                    />
                </p>
                <p>
                    <textarea 
                        onChange={this.props.messageChange}
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