/*
1) total 3 div banae
    ist div me all cards,className = "cards"
    2nd div me only image,className = "card","card__img"
    3rd div me title,sname,link,button , className = "card__info,card__category,
                                                card__title,"
                                                
*/



import React, { Component } from 'react';
import './index.css';

function Card(props) {
    console.log(props);
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src = {props.imgscr} alt= "myPic" className= "card__img"/>
                    <div className="card__info">
                        <span className="card__category">{props.title}</span>
                        <h3 className="card__title">{props.sname}</h3>
                        <a href = {props.link} target= "_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>



        
        </>

    );
}

export default Card;