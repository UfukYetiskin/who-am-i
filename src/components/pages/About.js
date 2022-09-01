import React from "react";
import {AiFillGithub} from '@react-icons/all-files/ai/AiFillGithub'
import {GrLinkedin} from '@react-icons/all-files/gr/GrLinkedin'
import {AiFillTwitterCircle} from '@react-icons/all-files/ai/AiFillTwitterCircle'
import {AiFillInstagram} from '@react-icons/all-files/ai/AiFillInstagram'
import styled from "styled-components";

import {useState, useEffect} from "react"


function About() {

  const ExperienceList = styled.ul`
    display : flex;
    flex - direction : column;
    justify-content : center;
    flex-wrap : wrap;
  `
  const ExpLi = styled.li`
    list-style-type : none;
    padding : 1%;
    width  : 40%;
    border : 1px solid grey;
    margin : 5% 1%;
    box-shadow : 10px 10px 5px grey;
    background-color : #F0FFFF;
  `
  
  const [repos, setRepos] = useState([])

  useEffect(() => {

    fetch("https://api.github.com/users/UfukYetiskin/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch(err => console.log(err))

  },[])
  
  return (
    <div>
      <div>
        <img
          style={{ width: "70%" }}
          src="https://www.linkpicture.com/q/WhatsApp-Image-2022-01-09-at-22.54.08.jpeg"
          alt="imageof-Ufuk"
        />
      </div>
      
      <ExperienceList>
        {repos && repos.map((rep) => (
          <ExpLi>
            <h4>Repository Name: {rep?.name}</h4>
            <h5>Repository Description: {rep?.description}</h5>
            <span>Created Date: {rep?.created_at}</span><br/><span>Last Updated Date: {rep?.updated_at}</span>
            <br/>
            <a href={rep?.html_url} alt="projectLink">Go Repository</a>
            <br/>
            
          </ExpLi>
        ))}
      </ExperienceList>
      <hr style={{margin:  '5%'}} />
      <div>
        <h3>Sosyal Medya Hesaplarım</h3>
        <ul style={{display : 'flex', listStyleType  :'none', justifyContent :'center'}}>
          <li style={{margin : '1%',textDecoration :'none'}}><a style={{textDecoration :'none'}} href="https://github.com/UfukYetiskin"><AiFillGithub/></a></li>
          <li style={{margin : '1%'}}><a style={{textDecoration :'none'}} href="https://www.linkedin.com/in/ufuk-yetiskin-1b016b18b/"><GrLinkedin/></a></li>
          <li style={{margin : '1%'}}><a style={{textDecoration :'none'}} href="https://twitter.com/YetiskinU"><AiFillTwitterCircle/></a></li>
          <li style={{margin : '1%'}}><a style={{textDecoration :'none'}} href="https://www.instagram.com/harut__marut/?hl=tr"><AiFillInstagram/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
