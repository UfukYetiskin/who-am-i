import React from 'react'
import {BrowserRouter as Router, Routes,Route, Link, NavLink} from 'react-router-dom'



function Navbar() {
  return (
    <div style={{listStyleType : 'none'}}>
        <ul style={{listStyleType : 'none', display : 'flex', justifyContent : 'center', textDecoration : 'none'}} >
            <li style={{margin : '1%', textDecoration : 'none'}}>
                <NavLink style={{ textDecoration: 'none', color  :'lightskyblue'}} to='/'>Home</NavLink>
            </li>
            <li style={{margin : '1%', textDecoration : 'none'}}>
                <NavLink style={{ textDecoration: 'none', color  :'lightskyblue'}} to='/about'>Abuot</NavLink>
            </li>
        </ul>
        <hr/>
    </div>
  )
}

export default Navbar