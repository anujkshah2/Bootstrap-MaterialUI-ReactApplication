import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
export default function Navbar() {
  return (

    <div className='nav-sticky'>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/profile/4544/suresh/458">Profile</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
</div>
    // <div>
    //     <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/about">About</Link></li>
    //         <li><Link to="/profile">Profile</Link></li>
    //         <li><Link to="/contact">Contact</Link></li>
    //     </ul>
    // </div>
  )
}
