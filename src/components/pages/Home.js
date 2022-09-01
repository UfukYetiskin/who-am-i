import React from 'react'
import {useEffect , useState} from 'react'
import styled from "styled-components"
import profilePhoto from "../../profilePhoto.jpeg"
import {AiFillGithub} from '@react-icons/all-files/ai/AiFillGithub'
import {GrLinkedin} from '@react-icons/all-files/gr/GrLinkedin'
import {AiFillTwitterCircle} from '@react-icons/all-files/ai/AiFillTwitterCircle'
import {AiFillInstagram} from '@react-icons/all-files/ai/AiFillInstagram'

function Home() {
  

  const Title = styled.h1`
    font-size : 3em;
    margin : 5%
  `
  const Subtitle = styled.h1`
    font-size : 1.5em;
    color : black;
  `
  const imgStyle = {
    width : "100%",
    borderRadius  :"60%",
    marginTop  : "5%",
    boxShadow : "10px 10px 5px grey",
  }
  const ImageBG = styled.div`
      padding : 1%;
      width : 20%;
      border-radius : 50%;
      margin : 5% auto
    `
  const webImgStyle = {
    width  : "30%",
    marginTop : "5%"
  }

  const AbuotMe = styled.div`
    background-color : cornflowerblue;
    padding : 2%;
    text-align : center;
  `
  const InfoHead = styled.h1`
    font-size : 1.8em;
    color : white;
  `
  const InfoParag = styled.h1`
    font-size : 1.2em;
    color : white;
    width : 70%;
    margin : 0 auto;
  `
  const ExperienceList = styled.ul`
    display : flex;
    flex - direction : column;
    justify-content : center;
  `
  const ExpLi = styled.li`
    list-style-type : none;
    padding : 1%;
    width  : 40%;
    border : 1px solid grey;
    margin : 5% 1%;
    box-shadow : 10px 10px 5px grey;
  `
  return (
    <div>
      <div>
        <Title><i>Jr. Frontend Developer</i></Title>
      </div>
      <div>
        <Subtitle>I try to code aesthetic and eye-pleasing designs and I love it.</Subtitle>
      </div>
      <ImageBG>
          <img style={imgStyle} src={profilePhoto} alt="profile" />
      </ImageBG>
      <div>
        <img  style={webImgStyle} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4qrkDrGY9Q_Gj51lxkwgc6a3xM7oEAX_UA&usqp=CAU' alt='wedesign'/>
      </div>
      <AbuotMe>
        <InfoHead><i>Hello everyone, I'm Ufuk Yetişkin</i></InfoHead>
        <InfoParag><i>I completed my undergraduate education at Pamukkale University. I met software at university. First I started with the backend and then I had a chance to try android. But I did not feel that I was having fun and enjoying in these areas and I decided to try frontend. I first started by learning HTML and CSS, and when I started to feel that it gave me pleasure, I decided to continue my career with frontend. Then I continued to develop individually. Meanwhile, I first started learning JavaScript, and then I started learning React, the library for JavaScript. I still continue to develop as an individual.</i></InfoParag>
      </AbuotMe>
      <Subtitle><i>My Expriences</i></Subtitle>
      <ExperienceList>
          <ExpLi>
              <h3>Bimser Çözüm</h3>
              <div style={{display : "flex", flexDirection : "row", justifyContent : "space-around"}}>
                <h4>Front-End Developer Intern</h4>
                <h5>March 2022 - April 2022, Kocaeli/Türkiye</h5>
              </div>
              <ul>
                  <li>
                      <p>The document of the software languages used in the projects developed with the Markdown markup language was created</p>
                  </li>
                  <li>
                      <p>Experienced teamwork and how to contribute to the project on the Github platform with Git Version Control System.</p>
                  </li>
                  <li>
                      <p>Projects were made with React, the library of JavaScript. Responsive design was made by formatting the project Tailwind</p>
                  </li>
              </ul>
          </ExpLi>
          <ExpLi>
              <h3>Fabryka Emocji Reklama</h3>
              <div style={{display : "flex", flexDirection : "row", justifyContent : "space-around"}}>
                <h4>Graphic Design Intern</h4>
                <h5>August 2021 - January 2022, Warszawa/Poland</h5>
              </div>
              <ul>
                  <li>
                      <p>Vector designs were created with CorelDRAW.</p>
                  </li>
                  <li>
                      <p>Edited images and pictures with PhotoShop.</p>
                  </li>
                  <li>
                      <p>Products are listed and offered for sale on Allegro, an e-commerce site.</p>
                  </li>
                  <li>
                      <p> He became the leader of the interns team and became the project manager.</p>
                  </li>
              </ul>
          </ExpLi>
          <ExpLi>
              <h3>Brisa</h3>
              <div style={{display : "flex", flexDirection : "row", justifyContent : "space-around"}}>
                <h4>Human Resources Intern</h4>
                <h5>June 2019 - August 2019, Kocaeli/Türkiye</h5>
              </div>
              <ul>
                  <li>
                      <p> He became the leader of the interns team and became the project manager.</p>
                  </li>
                  <li>
                      <p> Learned about document creation and storage.</p>
                  </li>
                  <li>
                      <p> Gained information about scheduling worker trainings.</p>
                  </li>
              </ul>
          </ExpLi>
      </ExperienceList>

      <div>
        <Subtitle><i>Sosyal Medya Hesaplarım</i></Subtitle>
        <ul style={{display : 'flex', listStyleType  :'none', justifyContent :'center'}}>
          <li style={{margin : '1%',textDecoration :'none', fontSize : "3em", color : "black"}}><a style={{textDecoration :'none'}} href="https://github.com/UfukYetiskin"><AiFillGithub/></a></li>
          <li style={{margin : '1%', fontSize : "3em", color : "black"}}><a style={{textDecoration :'none'}} href="https://www.linkedin.com/in/ufuk-yetiskin-1b016b18b/"><GrLinkedin/></a></li>
          <li style={{margin : '1%', fontSize : "3em", color : "black"}}><a style={{textDecoration :'none'}} href="https://twitter.com/YetiskinU"><AiFillTwitterCircle/></a></li>
          <li style={{margin : '1%', fontSize : "3em", color : "black"}}><a style={{textDecoration :'none'}} href="https://www.instagram.com/harut__marut/?hl=tr"><AiFillInstagram/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Home