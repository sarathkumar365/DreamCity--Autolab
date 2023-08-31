import React from 'react'

function NavbarComp() {
  return (
    <navbar className="nav--primary">
        <div className="nav--left">
            <h1 className='nav--heading'>Dream City</h1>
        </div>

        <div className="nav--right">
            <a className='about' href="./about.jsx">About</a>
            <a className='contact' href="./contact.jsx">Contact</a>

            {/* <a className='ping' href="#">Ping!</a> */}
        </div>
    </navbar>
    )
}

export default NavbarComp