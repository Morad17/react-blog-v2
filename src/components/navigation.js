import React from 'react'
import {Link} from 'react-router-dom';


const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Me',
        path: '/contact-me'
    },
    {
        title: 'Login',
        path: '/login'
    }

]

export default function Navigation () {
    return(
    <nav className="site-navigation">
        <span>My react blog</span>
        <ul>
            { navLinks.map((link, index) => {
                return(
               <li key={index}>
                   <Link to={link.path}>{link.title}</Link>
                </li> )
            })
                
            }
        </ul>

    </nav>)
}