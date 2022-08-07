import React from 'react'
import {useEffect , useState} from 'react'

function Home() {
  const [pictures, setPictures] = useState([])



  return (
    <div>
      <div>
        <img style={{width : '30%', margin : '10%', boxShadow :'10px 10px 10px 5px #ccc'}} src="https://www.linkpicture.com/q/WhatsApp-Image-2022-08-03-at-15.24.50.jpeg"  alt=''/>
        <img style={{width : '20%', margin : '5%', boxShadow :'10px 10px 10px 5px #ccc'}} src='https://www.linkpicture.com/q/WhatsApp-Image-2022-08-03-at-15.37.04.jpeg' alt='' />
      </div>
      <div>
        <img style={{width : '20%', margin : '5%', boxShadow :'10px 10px 10px 5px #ccc'}} src="https://www.linkpicture.com/q/WhatsApp-Image-2022-08-03-at-15.36.59.jpeg"  alt=''/>
        <img style={{width : '30%', margin : '10%', boxShadow :'10px 10px 10px 5px #ccc'}} src='https://www.linkpicture.com/q/WhatsApp-Image-2022-08-03-at-16.26.08.jpeg' alt='' />
      </div>
      <div>
        <img style={{width : '50%', margin : '2%', boxShadow :'10px 10px 10px 5px #ccc'}} src="https://www.linkpicture.com/q/WhatsApp-Image-2022-08-03-at-15.36.56-1.jpeg"  alt=''/>
        <img style={{width : '30%', margin : '5%', boxShadow :'10px 10px 10px 5px #ccc'}} src='https://www.linkpicture.com/q/WhatsApp-Image-2022-08-03-at-15.37.05.jpeg' alt='' />
      </div>
      <div>
        <img style={{width : '30%', margin : '2%', boxShadow :'10px 10px 10px 5px #ccc'}} src="https://www.linkpicture.com/q/WhatsApp-Image-2022-08-03-at-15.36.53.jpeg"  alt=''/>      </div>
    </div>
  )
}

export default Home