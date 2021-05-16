

import React, { Component } from 'react'
import Card from "./Cards";
import Sdata from "./Sdata"
import './index.css';



const App = () => {
    return (
        <>
  <h1 className = "heading_style">Watch some Movies and TV series</h1>
  
  {Sdata.map((val) => {
    return (
        <Card
            key = {val.id}
            imgsrc = {val.imgscr}
            title = {val.title}
            sname = {val.sname}
            link ={val.link}
        />

    )
  })}
  </>

    )
}

export default App;
