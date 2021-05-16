/*
1) total 3 div banae
    ist div me all cards,className = "cards"
    2nd div me only image,className = "card","card__img"
    3rd div me title,sname,link,button , className = "card__info,card__category,
                                                card__title,"
                                                
*/



import React, { Component } from 'react';
import './index.css';
import Image from './Image';
import Heading from './Heading';
import Title from './Title';
import Link from './Link'

function Card(props) {
    // console.log(props);
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Image imgsrc =  {props.imgsrc}/>
                    <div className="card__info">
                       <Title title = {props.title}/>
                        <Heading sname = {props.sname}/>
                        <Link link = {props.link}/>
                            
                           
                       
                    </div>
                </div>
            </div>



        
        </>

    );
}

export default Card;