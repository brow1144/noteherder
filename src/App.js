import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import SignOut from './SignOut'
import base from './base'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
    }
  }

  componentWillMount() {
    base.syncState(
      'notes',
      {
        context: this,
        state: 'notes',
      }
    )
  }

  saveNote = (note) => {
    if(!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
  }

  deleteNote = (note) => {
    const notes = {...this.state.notes}
    delete notes[note.id]
    this.setState({ notes })
  }

  signedIn = () => {
    return true
  }

  renderMain = () => {
    return ( 
        <div>
          <SignOut />
          <Main 
            notes={this.state.notes}
            saveNote={this.saveNote}
            deleteNote={this.deleteNote}
           />
        </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn />}
      </div>
    );
  }
}

export default App;
