/*
< Card me attributes likhe hai, jo Reactjs me props kehlate hai, inke beech me 
  kabhi bhee comma, nahi lagate hai.

  *index.js
  file banakar ke usse array ke values ko call kara hai index number se 
  *aur array ke values ko object form me banaya tha, isliye object form me array 
   ko call kara hai.

   *fat-arrow function
   fat= function hatake const likho
   arrow = () ke done taraf = () => aise lagao
   ( value of array,index no of array elemetns,hint name for current array )
   */




import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from "./Cards";
import Sdata from "./Sdata"
import './index.css';




ReactDOM.render(
  <>
  <h1 className = "heading_style">Watch some Movies and TV series</h1>
  
  {Sdata.map((val) => {
    return (
        <Card
            imgscr = {val.imgscr}
            title = {val.title}
            sname = {val.sname}
            link ={val.link}
        />

    )
  })}
  </>,
  document.getElementById("root")
);