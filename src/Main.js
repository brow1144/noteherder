import React, { Component } from 'react'
import './Main.css'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
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
        },)
    }

    onMessageChange(ev) {
        let updatedNotes = this.state.notes
        updatedNotes.message = ev.target.value
        
        this.setState({
            notes: updatedNotes
        },)
    } 
    
    render() {
        return (
            <div className="Main">
                <Sidebar />
                <NoteList 
                    getTitle={this.state.notes.title}
                    getMessage={this.state.notes.message}
                />
                <NoteForm 
                    getTitle={this.state.notes.title}
                    titleChange={this.onTitleChange} 
                    messageChange={this.onMessageChange} 
                />
            </div>
        )
    }
}

export default Main