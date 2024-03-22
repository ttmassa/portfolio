import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout({ handleMode, lightMode }) {
    return (
        <div className='layout--main'>
            <Header />
            <Outlet />
            <div className='lightmode-icon'></div>
        </div>
    )
}