import React from 'react'
import { useState ,useEffect } from 'react'
import '../style.css'

export default function CustomCursor() {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const updateMousePosition = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener('mousemove', updateMousePosition)

        return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])

    return (
        <div 
            className='cursor'
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    )

}