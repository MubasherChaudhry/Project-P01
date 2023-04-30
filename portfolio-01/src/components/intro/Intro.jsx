import React from 'react'
import './Intro.scss'
function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">

      <div className="imgContainer">
        <img src="assets/Mobimack.PNG" alt="" />
      </div>

      </div>
      <div className="right">
        <h2>Hello Everyone</h2>
        <h1>Mobi here</h1>
        <h3>Web Developer <span> </span>  </h3>
      </div>
      <a href='#portfolio'> </a>
    </div>
  )
}

export default Intro
