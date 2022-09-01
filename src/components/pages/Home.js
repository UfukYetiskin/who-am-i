import React from 'react'
import {useEffect , useState} from 'react'
import styled from "styled-components"
import profilePhoto from "../../profilePhoto.jpeg"

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
  }
  const ImageBG = styled.div`
      padding : 1%;
      background-color : lightblue;
      width : 20%;
      border-radius : 50%;
      border : 5px solid cornflowerblue;
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
      <ExperienceList>

      </ExperienceList>
    </div>
  )
}

export default Home