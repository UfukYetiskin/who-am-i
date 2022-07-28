import React from 'react'
import {useEffect , useState} from 'react'

function Home() {
  const [pictures, setPictures] = useState([])

  // useEffect(() => {
  //   fetch('https://www.instagram.com/harut__marut/?__a=1')
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  // })

  return (
    <div>
      Will be here pictures
    </div>
  )
}

export default Home