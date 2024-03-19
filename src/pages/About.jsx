import React from 'react'

export default function About() {
    return (
        <main className='about--page'>
            <div className='about--intro'>
                <h2>About me</h2>
                <p>
                    I am a computer science student 
                    in my second year at the University 
                    of Evry Val d'Essones - Paris Saclay.
                    My passion for technology and software
                    development started back in high school
                    where I tried to create a video game
                    with my friends. Update: it's still my
                    first real project to date and you can
                    find it in the Work section! <br /> Since then, 
                    my interest in software development has
                    only grown and I have been learning and
                    experimenting with different technologies
                    and programming languages. 
                    The goal is pretty simple: why not try to
                    make a living out of my passion and have 
                    fun creating cool stuff?
                </p>
            </div>

            <div className='about--download'>
                <a 
                    className='about--cv' 
                    href='./assets/CV.pdf'
                    target='blank'
                >
                    ↓ curriculum vitae
                </a>
            </div>
        </main>
    )
}