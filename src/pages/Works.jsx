import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Works() {
    
    return (
        <section className='works--page'>
            <ul>
                <NavLink className='works--title' index to='1'>File encryption</NavLink>
                <NavLink className='works--title' to='2'>Currency converter</NavLink>
                <NavLink className='works--title' to='3'>Tenzies game</NavLink>
                <NavLink className='works--title' to='4'>Balasido</NavLink>
                <NavLink className='works--title' to='5'>To-do list manager</NavLink>
                <NavLink className='works--title' to='6'>#Van Life</NavLink>
            </ul>
            <Outlet />
        </section>
    )
}