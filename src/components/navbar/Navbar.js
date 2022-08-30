import React from 'react'
import {BrowserRouter as Router, Routes,Route, Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import uylogo from "../../uylogo.png"

function Navbar() {
  const MainDiv = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    padding : 1%;
    border-bottom : 1px solid skyblue;
  `
  const HomeLink = styled.span`
    display : inline-block;
    font-size : 1.5em;
    color : skyblue;
    font-family : 'Roboto Condensed', sans-serif; 
  `
  const AboutLink = styled.span`
    display : inline-block;
    font-size : 1.2em;
    color : skyblue;
    font-family : 'Roboto Condensed', sans-serif; 
  `
  


  return (
    <MainDiv >
      <div>
        <NavLink to='/'><img style={{width : "20%"}} src={uylogo} alt="uylogo" /></NavLink>
      </div>
      <div>
        <NavLink  to='/about'><AboutLink>Abuot</AboutLink></NavLink>
      </div>
    </MainDiv>
  )
}

export default Navbar