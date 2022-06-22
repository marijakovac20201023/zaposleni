import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './WelcomePage.css';

import {Link} from "react-router-dom";
import axios from 'axios'


const slideImages = [
  'https://wallpaperaccess.com/full/2889098.jpg',
  'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHw%3D&w=1000&q=80',
  'https://wallpaperaccess.com/full/2889105.jpg'
];

const Slideshow = () => {
 




    return (

      <div>
        
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            
            </div>
          </div>
        </Slide>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
};

export default Slideshow;