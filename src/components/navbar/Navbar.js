import React from 'react'
import {BrowserRouter as Router, Routes,Route, Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import uylogo from "../../uylogo.png"
import me from "../../me.png"

function Navbar() {
  const MainDiv = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    padding : 1%;
    border-bottom : 1px solid skyblue;
    margin : 0
  `
  
  


  return (
    <MainDiv >
      <div>
        <NavLink to='/'><img style={{width : "20%"}} src={uylogo} alt="uylogo" /></NavLink>
      </div>
      <div>
        <NavLink  to='/about'><img style={{width : "20%", marginTop  :"8%"}} src={me} alt="uylogo" /></NavLink>
      </div>
    </MainDiv>
  )
}

export default Navbar