import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo/logo.svg'

export default function Header() {
    return (
        <header className='header--page'>
            <Link className='header--logo' to=".">
                <img src={Logo} alt='logo'/>
            </Link>
            <nav>
                <NavLink 
                    className={({ isActive }) => isActive ? "selected" : "header--link"}
                    to="/works"
                >
                    My work
                </NavLink>

                <NavLink 
                    className={({ isActive }) => isActive ? "selected" : "header--link"}
                    to="/about"
                >
                    About
                </NavLink>
                
                <div>
                    <a 
                        className='header--contact'
                        href='https://github.com/ttmassa' 
                        target='blank'
                    >
                        <img src='/assets/icon/github_logo.png' alt='github logo'/>
                    </a>

                    <a 
                        className='header--contact'
                        href='https://www.linkedin.com/in/timoth%C3%A9e-massa-88bbbb278/' 
                        target='blank'
                    >
                        <img src='/assets/icon/linkedin_logo.png' alt='github logo'/>
                    </a>

                    <a
                        className='header--contact'
                        href='mailto:timothee.massa.perso@gmail.com'
                        target='blank'
                    >
                        <img src='/assets/icon/email_logo.png' alt='email logo'/>
                    </a>

                </div>
            </nav>
        </header>   
    )
}