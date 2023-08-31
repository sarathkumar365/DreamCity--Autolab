import React from 'react'
import car from '../assets/images/png/c2.png'
import breakes from '../assets/images/png/brakes.png'

import '../css/services.css'

function Servicesomp() {
  return (
    <>
      <div className="container">
        <div className="nav--services">
          <a href='/'>Dream City</a>
        </div>

        <section className="services--main">
          <h2 className='services--headlines fade-in'>Window Tint</h2>

          <div className="car--wrap">
            <p className='services--headline'><span>Superior</span> <br />Window Tint</p>
            <img className='img--car ' src={car} alt="" />
          </div>
        </section>

        <section className='section--2'>
          <h2 className='products'>What We Use<span>!</span></h2>
          <div className="p--1">
            <div className="p--1-left flex">
              <img src={breakes} alt="breakes" />
            </div>

            <div className="p--1-right flex">
              <h3 className='p--1-name'>Breakes</h3>

              <p className='explanation'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio laudantium facilis eaque molestias eveniet deleniti quis beatae, at deserunt minima illo nobis repudiandae corrupti natus vitae corporis modi iste!Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio laudantium facilis eaque molestias eveniet deleniti quis beatae, at deserunt minima illo nobis repudiandae corrupti natus vitae corporis modi iste!</p>
            </div>
          </div>

          <div className="p--1">
            <div className="p--1-right flex">
              <h3 className='p--1-name'>Breakes</h3>

              <p className='explanation'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio laudantium facilis eaque molestias eveniet deleniti quis beatae, at deserunt minima illo nobis repudiandae corrupti natus vitae corporis modi iste!Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio laudantium facilis eaque molestias eveniet deleniti quis beatae, at deserunt minima illo nobis repudiandae corrupti natus vitae corporis modi iste!</p>
            </div>

            <div className="p--1-left flex padding--fix">
              <img src={breakes} alt="breakes" />
            </div>
          </div>

          <div className="p--1">
            <div className="p--1-left flex">
              <img src={breakes} alt="breakes" />
            </div>

            <div className="p--1-right flex">
              <h3 className='p--1-name'>Breakes</h3>

              <p className='explanation'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio laudantium facilis eaque molestias eveniet deleniti quis beatae, at deserunt minima illo nobis repudiandae corrupti natus vitae corporis modi iste!Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio laudantium facilis eaque molestias eveniet deleniti quis beatae, at deserunt minima illo nobis repudiandae corrupti natus vitae corporis modi iste!</p>
            </div>
          </div>
        </section>
      </div>
    </>
    )
}

export default Servicesomp