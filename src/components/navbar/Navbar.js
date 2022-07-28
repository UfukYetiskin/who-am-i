import React from 'react'
import {BrowserRouter as Router, Routes,Route, Link, NavLink} from 'react-router-dom'



function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>Abuot</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar