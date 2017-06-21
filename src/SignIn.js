import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'
import quill from './quill.svg'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className="outterDiv">
      <div className="noteherderLogo">
        <img src={quill} alt="Noteherder" />
      </div>
      <h1>Noteherder</h1>
      <h3 className="firstLine">You live too busy of a life to remember everything!</h3>
      <h3 className="secondLine">You need to write it down!</h3>
      <br />
      <button
        className="SignIn"
        onClick={() => authenticate(githubProvider)}
      >
        <i className="fa fa-github" aria-hidden="true"></i> Sign in with GitHub
      </button>
      <br />
      <button
        className="SignIn bottom"
        onClick={() => authenticate(googleProvider)}
      >
        <i className="fa fa-google" aria-hidden="true"></i> Sign in with Google
      </button>
    </div>
  )
}

export default SignIn
