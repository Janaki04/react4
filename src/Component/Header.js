import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

function Header() {
  return (
    <div className='box'>
     <NavLink className="home" style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } } to="/home">Home</NavLink> 
     <NavLink className="student" style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } } to="/student">Student</NavLink> 
     <NavLink className="contact" style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } } to="/contact">Contact</NavLink> 
     </div>
  )
}

export default Header