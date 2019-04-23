import React from 'react'

export default function Logout(props) {
    localStorage.removeItem('access_token');
    props.history.push('/')
  return (
    <div>
    
    </div>
  )
}
