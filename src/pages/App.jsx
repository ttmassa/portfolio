import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../style.css'
import Layout from '../components/Layout'
import Home from './Home'
import Works from './Works'
import About from './About'
import Project from './Project'
import ProjectIntro from '../components/ProjectIntro'

export default function App() {
    const [lightMode, setLightMode] = useState(false)
    
    useEffect(() => {
        if (!localStorage.getItem('visited')) {
            // Set visited flag
            localStorage.setItem('visited', true)
        }
    }, []);

    window.onunload = () => {
        localStorage.removeItem('visited')
    }

    function toggleMode() {
        setLightMode(prevMode => !prevMode)
    }

    const theme = lightMode ? 'light' : null

    return (
        <Router>
            <div className={`main--container ${theme}`}>
                <Routes>
                    <Route path='/' element={<Layout mode={lightMode} toggleMode={toggleMode}/>}>
                        <Route index element={<Home mode={lightMode} toggleMode={toggleMode}/>}/>
                        <Route path='works' element={<Works />}>
                            <Route index element={<ProjectIntro />}/>
                            <Route path=':projectId' element={<Project />}/>
                        </Route>
                        <Route path='about' element={<About />}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}
