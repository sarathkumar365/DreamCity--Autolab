import React, {useState} from 'react'
import '../css/homepage.css'
import '../css/navbar.css'

import NavbarComp from '../components/NavbarComp.jsx'
import car from '../assets/images/png/detailed-car.png'

function HomepageComp() {

    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = (event) => {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        setIsAnimating(true);
    
        // Delay the navigation after the animation
        setTimeout(() => {
          window.location.href = event.target.getAttribute('href'); // Navigate to the destination page
        }, 1500); // Adjust the timeout based on your animation duration
      };

  return (
    <>
    <NavbarComp/>

        <section className="landing--page">
            <div className="landing--left">
                <h1 className='landing--headline'>Transform Your <br /><span className='car--span'>Car's</span><br /> Appearance</h1>

                <div className="services">
                    <a className='services--bttn button-49' onClick={startAnimation}  href="/services">Services</a>
                </div>
            </div>

            <div className="landing--right">
                <div className={ isAnimating ? 'fade-out detailed--car' : 'detailed--car'}>
                    <img src={car} id='moving-car'  alt="detailed car" />
                </div>
            </div>
        </section>
       

    
    </>
    )
}

export default HomepageComp