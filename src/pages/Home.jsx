import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <main className='home--page'>
            <h1>Welcome</h1>
            <p>
                Hi, I'm Timothée Massa, a computer 
                science student delving into the 
                realm of code. Join me on this 
                journey of exploration and creation 
                as I navigate the world of software 
                development. Fasten your seatbelt - 
                we're about to take a byte out of 
                the digital universe!
            </p>
            <div className='home--links'>
                <Link 
                    className='home--link'
                    to="works"
                >
                    My projects
                </Link>
                <Link 
                    className='home--link'
                    to="about"
                >
                    More about me
                </Link>
            </div>
            <label className="toggle-switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </main>
    );
}
