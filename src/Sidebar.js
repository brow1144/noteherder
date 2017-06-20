import React, { Component } from 'react'

import './Sidebar.css'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'
import SignOut from './SignOut'

class Sidebar extends Component {
  render() {
    return (
      <nav className="Sidebar">
        <div className="logo">
          <img src={quill} alt="Noteherder" />
        </div>
        <button onClick={() => this.props.addNote()} className="new-note">
          <img src={newHover} alt="New note" />
          <img className="outline" src={newIcon} alt="New note" />
        </button>
        <SignOut signOut={this.props.signOut} />
      </nav>
    )
  }
}

export default Sidebar
