import React from 'react'
import Logo from '../assets/logo.png';
import '../Styles/Thanks.css'

function Thanks() {
  return (
    <div className="thanks">
        <img src={Logo} alt="srm logo" />
        <h1>Your Attendance is Submitted Successfully!</h1>
    </div>
  )
}
export default Thanks