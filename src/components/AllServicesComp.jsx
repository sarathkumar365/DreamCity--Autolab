import React,{useState} from 'react'

import '../css/allservices.css'

import Service1Comp from './Service1Comp.jsx'
import Service2Comp from './Service2Comp.jsx'
import Service3Comp from './Service3Comp.jsx'
import Service4Comp from './Service4Comp.jsx'

import aL from '../assets/images/png/left-arrow.png'

function AllServicesComp() {

    const allServices = [<Service1Comp/>, <Service2Comp/>, <Service3Comp/>,<Service4Comp/>]

    const [pagination,setPagination] = useState(0)

    const [current,setCurrent] = useState({
        pleft:0,
        pright:1
    })

    const handlePagination = (paginate) => {

        if(paginate === 1) {
            if(pagination != 3) {
                // setPagination(pagination + 1)

                setCurrent(old => {
                    return {
                        pleft: old.pleft,
                        pright: old.pright + 1,
                    }
                })
            }
        }

        if(paginate === 0) {
            if(!pagination === 0 ) {

                setCurrent(old => {
                    return {
                        pleft: old.pleft - 1,
                        pright: old.pright - 1,
                    }
                })
            }
        }

    }

    console.log(current);

    const currentArr = allServices.slice(pagination, pagination + 3)

    // console.log(currentArr);
    return (
    <>

        <div className="nav--services">
          <a href='/'>Dream City</a>
        </div>
        <div className="allservices--main">
            <div className="allservices--headline">
                <h1 className='headline--services'>Our Services<span>!</span></h1>
            </div>
            <section class="vehicle--tabs">

                <div className="go--left" onClick={() => handlePagination(0)}>
                    <img src={aL} className='left--arrow' alt="left--arrow"  />
                </div>

                {/* <div class="car">
                <a href="./tint">
                    <img class="image" src={c1} alt="car view"/>
                    <div class="middle">
                    <div class="text">WINDOW TINT</div>
                    </div>
                </a>
                </div>
                <div class="bike">
                <a href="./tint">
                    <img class="image" src={c2} alt="car view"/>
                    <div class="middle">
                    <div class="text">BODY WRAPS</div>
                    </div>
                </a>
                </div>
                <div class="truck">
                <a href="./tint">
                    <img class="image" src={c3} alt="car view"/>
                    <div class="middle">
                    <div class="text">BODY ALTERATION</div>
                    </div>
                </a>
                </div> */}

                {/* <div class="truck">
                <a href="./tint">
                    <img class="image" src={c3} alt="car view"/>
                    <div class="middle">
                    <div class="text">BODY ALTERATION</div>
                    </div>
                </a>
                </div> */}

                {
                    currentArr
                }

                <div className="go--right" onClick={() => handlePagination(1)}>
                    <img src={aL} className='right--arrow' alt="right--arrow"  />
                </div>
            </section>
        </div>
    </>

    )
}

export default AllServicesComp