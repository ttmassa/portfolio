import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo/logo.svg'

export default function Header({ mode, toggleMode }) {
    const [paramsVisible, setParamsVisible] = useState(false)

    function handleParams() {
        setParamsVisible(prevVisibility => !prevVisibility)
    }

    return (
        <header className='header--page'>
            <Link className='header--logo' to=".">
                <img src={Logo} alt='logo'/>
            </Link>
            <div className='header--links'>
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
                            className='header--contact email-icon'
                            href='mailto:timothee.massa.perso@gmail.com'
                            target='blank'
                        >
                            <img src='/assets/icon/email_logo.png' alt='email logo'/>
                        </a>

                        <div>
                            <button className='gear-icon' onClick={handleParams}>
                                <img src='./assets/icon/gear_icon.png' alt='gear icon'/>
                            </button>
                        </div>
                    </div>    
                </nav>

                {
                    paramsVisible &&
                    <div className='header--params'>
                        <div className='header--mode'>
                            <p>Mode:</p>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={mode} onChange={toggleMode}/>
                                <span className="slider round"></span>
                            </label>

                        </div>
                        <div className='header--languages'>
                            <button>FR</button>
                            <button>EN</button>
                        </div>

                    </div>
                }

            </div>

        </header>   
    )
}