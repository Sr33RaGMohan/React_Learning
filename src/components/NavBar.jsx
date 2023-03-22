import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <div className='nav_bar'>
        <nav>
          <ul>
           <li><Link to='/' exact>HOME</Link></li> 
            <li><Link to='/About'>ABOUT</Link></li>
            <li><Link to='/AppPage'>APP</Link></li>
            <li><Link to= '/WeatherData'>WeatherData</Link></li>
            <li><Link to= '/pieChart'>Diagram</Link></li>
          </ul>
            
        </nav>

    </div>
  )
}

export default NavBar