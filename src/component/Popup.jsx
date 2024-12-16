import React from 'react'
import './Popup.css'

function Popup({Popupclose,Popupreset}) {
  return (
    <>  
        <div className='form show' id="blogForm">
            <button className='close-btn' onClick={Popupclose}>&times;</button>
            <div className="winingcontent">
                <h1>Player-1</h1>
            <h1><i class="fa-brands fa-battle-net"></i></h1>
                <h1>Player-2</h1>
            </div>
            <div className='buttonsofPopups'>
                <i className='fa-solid fa-rotate-right set-button' onClick={Popupreset}></i>
               
            </div>
        </div>
    </>
  )
}

export default Popup