import React from 'react'
import "../stylesheets/homepage.css"
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-bar">
        <Link to="/"><img className="nav-logo" src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/quizzlogo_mjesmc.png" alt="nav-logo"/></Link>
        <div className="nav-option">
            <div className="nav-short">
                <i className="fas fa-bars"></i>
            </div>
            <ul>
                <li><Link to="/login"><button><i className="fa-solid fa-arrow-right-to-bracket"> </i> Login</button></Link></li>
                <li><Link to="/"><p><i className="fas fa-home"></i> Home</p></Link></li>
                <li><Link to="/profile"><p><i className="far fa-user"></i>Profile</p></Link></li>
            </ul>
        </div>
    </nav>      
  )
}

export { Nav }