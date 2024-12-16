import React from 'react'
import './Navbar.css'
function Navbar({showpopup}) {
  return (
    <div className='Navbar-list'>
        <div className="navitem" onClick={showpopup}>Stop</div>
        <div className="navitem">Restart</div>
    </div>
  )
}
export default Navbar