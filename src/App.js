import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeChange } from './ThemeChange'

function getRandom (){
  const randomNumber = Math.random()
  if(randomNumber < 0.5){return 1}else {return 0}
}

function Vaccine(){
  const [kaffesejler, setKaffesejler] = useState('')

  const ifFalse = (
    <div>
      <p>Nej desværre.. men her er en kaffesejler:</p>
      <img src='https://www.club300.dk/upload/image/userfiles/image/RS_2020/Kaffer/Kaffe_3_Kim_Duus.jpg' alt='kaffesejler'/>
    </div>
  )
  const ifTrue = (
    <p>JA!!</p>
  )
  
  return (
    <div>
      
      <button onClick={()=>{getRandom() ? setKaffesejler(ifTrue) : setKaffesejler(ifFalse)}}> Er vaccinen snart klar?</button>
      {kaffesejler}
    </div>
  ) 
}

function App(){
  const iconStyling = {
    heigth: '2em'
  }
  return (
    <div>
      
      <ThemeChange/>
      <Vaccine/>

    <a href='https://fontawesome.com/license'><p>I'm using FontAwesome Icons!</p></a>
    </div>
  )
}


export default App