import React from 'react'
import "./Navbarcss.css"
import Logo from '../../assets/10timeslogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='mini-logo'>
                    <Link to={'/'}>
                        <img src={Logo} className='mlogo' alt='logo' />
                    </Link>
                </div>
                <div className='nav-links'>
                    <ul>
                        <Link to={'/events'}><li>Event</li></Link>
                        <Link to={'/'}><li>Calendar</li></Link>
                        <li>Explore</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
