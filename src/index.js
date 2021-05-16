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

   * here we are writing var not props because var is here used as value for map function

   */




import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App'




ReactDOM.render(<App/>,document.getElementById("root")
);