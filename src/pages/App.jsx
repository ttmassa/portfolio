import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../style.css'
import Layout from '../components/Layout'

/*
    * General mockup of the App component
    * The App component will be a single page application
    * The 3 main colors will be black, white and a dark green. I can also use some yellow for the design
    * The header has a navigation bar on the left and links to my social media on the right
    * A big Home page with a light header and 2 main links. One for my projects and the other for my About page
    * In the project page, there will be a search bar to filter the projects by name and language used
    * For each project in the projects page, I will have a card with a picture, a title, a description and a link to its detailled page
    * In each detailled page, I will have a picture, a title, a description, a link to the project and a link to the code
*/

export default function App() {
    return (
        <Router>
            <Route path='/' element={<Layout />}>

            </Route>
        </Router>
    )
}