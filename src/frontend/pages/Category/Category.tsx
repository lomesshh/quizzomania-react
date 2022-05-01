import React from 'react'
import "../../stylesheets/category.css"
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div><div className="category__heading">
    <i className="fa-solid fa-book-atlas"></i>
    <h1>Choose your category</h1>
</div>

<div className="category">
    <div className="category__one">
        <div className="category__card">
            <div className="category__image">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/reactquizz_qgacum.png" alt="category-img" />
            </div>
            <h2>React JS</h2>
            <p>React is a JavaScript library for building user interfaces.
                 Test your knowledge with this basic React quiz made especially for beginners.</p>
            <div className="category__button">
                <Link to="/rules"><h5>Play now <i className="fa-solid fa-arrow-right"></i></h5></Link>
                <Link to="/leaderboard"><h5>Score board <i className="fa-solid fa-medal"></i></h5></Link>
            </div>
        </div>
    </div>
    <div className="category__two">
        <div className="category__card">
            <div className="category__image">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151557/quizzomania/nodequizz_wgjonr.png" alt="category-img" />
            </div>
            <h2>Node JS</h2>
            <p>Node.js is an open source server environment. it allows you to run JS on the server.
                 Test your knowledge with this basic React quiz made especially for beginners.</p>
            <div className="category__button">
                <Link to="/rules"><h5>Play now <i className="fa-solid fa-arrow-right"></i></h5></Link>
                <Link to="/leaderboard"><h5>Score board <i className="fa-solid fa-medal"></i></h5></Link>
            </div>
            </div>
        <div className="category__card">
            <div className="category__image">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151557/quizzomania/jsquizz_scmx63.png" alt="category-img" />
            </div>
            <h2>Javascript</h2>
            <p>JavaScript is a high-level, often just-in-time compiled language.
                 Test your knowledge with this basic React quiz made especially for beginners.</p>
            <div className="category__button">
                <Link to="/rules"><h5>Play now <i className="fa-solid fa-arrow-right"></i></h5></Link>
                <Link to="/leaderboard"><h5>Score board <i className="fa-solid fa-medal"></i></h5></Link>
            </div>
        </div>
    </div>
    <div className="category__three">
        <div className="category__card">
            <div className="category__image">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151557/quizzomania/angularquizz_neksco.png" alt="category-img" />
            </div>
            <h2>Angular JS</h2>
            <p>Angular is a JavaScript framework for building user interfaces.
                 Test your knowledge with this basic Angular quiz made especially for beginners.</p>
            <div className="category__button">
                <Link to="/rules"><h5>Play now <i className="fa-solid fa-arrow-right"></i></h5></Link>
                <Link to="/leaderboard"><h5>Score board <i className="fa-solid fa-medal"></i></h5></Link>
            </div>
        </div>
    </div>
</div></div>
  )
}

export { Category }