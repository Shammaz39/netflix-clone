import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="https://cdn.cdnlogo.com/logos/n/81/netflix.svg" alt="logo" />
      </div>

      <div className='avatar'>
        <img src="https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg" alt="avatr" />
      </div>
    </div>
  )
}
export default NavBar