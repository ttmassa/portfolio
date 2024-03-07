import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header--page'>
            <Link className='header--title'>Massa</Link>
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

                <NavLink 
                    className={({ isActive }) => isActive ? "selected" : "header--link"}
                    to="/contact"
                >
                    Contact me
                </NavLink>
            </nav>
        </header>   
    )
}