import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
     <div className="left">
        <img  className='logoImg' src="data:image/png;base64,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" alt="" />
        <h1 className='title'>Etherum Lottery DAPP</h1>
     
     </div>
     
        <ul className='list'>
            <li className='listItem'>Manager</li>
            <li className='listItem'>Players</li>
            <li className='listItem'>How To Play</li>
            <li className='listItem'>Learn About Project</li>

        </ul>
    </nav>
  )
}

export default Navbar
