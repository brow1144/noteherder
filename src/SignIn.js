import React from 'react'

import './SignIn.css'

const SignIn = ({ authHandler }) => {
  const authenticate = () => {
    authHandler({
      uid: 'dstrus',
    })
  }
  
  return (
    <button 
      onClick={authenticate} 
      className="SignIn"
    >
      Sign In
    </button>
  )
}

export default SignIn