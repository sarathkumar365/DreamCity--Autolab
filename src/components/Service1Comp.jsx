import React from 'react'

import c1 from '../assets/images/img/c7.jpg'
import '../css/allservices.css'


function Service1Comp() {
  return (
    
    <div class="truck">
        <a href="./tint">
            <img class="image" src={c1} alt="car view"/>
            <div class="middle">
            <div class="text">WINDOW TINT</div>
            </div>
        </a>
    </div>


    )
}

export default Service1Comp