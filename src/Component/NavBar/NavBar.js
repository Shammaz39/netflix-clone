import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="https://cdn.cdnlogo.com/logos/n/81/netflix.svg" alt="logo" />
      </div>

      <div className='avatar'>
        <img src="https://i.pinimg.com/originals/2b/d3/7e/2bd37e0e17f7d04b9af65fb6d2d9e2c8.png" alt="avatr" />
      </div>
    </div>
  )
}

export default NavBar