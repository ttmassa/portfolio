import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout({ mode, toggleMode }) {
    return (
        <div className='layout--main'>
            <Header mode={mode} toggleMode={toggleMode}/>
            <Outlet />
            <div className='lightmode-icon'></div>
        </div>
    )
}