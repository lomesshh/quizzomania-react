import React from 'react'
import "../../stylesheets/leaderboard.css"
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  return (
    <div className="questions-section">
        <div className="highscore__title">
            <div className="trophy__image">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151559/quizzomania/trophy_vgsufg.png" alt="trophy-img" />
            </div>
            <h1 className="">React quizz score board</h1>
            <p>The score will take care of itself when you take care of 
                the effort that precedes the score</p>
            <h4>- john wooden</h4>
        </div>
        <h3>Check Top - 5 scores</h3>
        <div className="display__question">
            <ul className="stacked-list">
                <li className="first__rank">
                    <span><i className="fa-solid fa-graduation-cap"></i> Lomesh Badhe</span>
                    <span>100/100</span>
                </li>
                <li className="second__rank">
                    <span><i className="fa-solid fa-graduation-cap"></i> Carry Smith</span>
                    <span>90/100</span>
                </li>
                <li className="third__rank">
                    <span><i className="fa-solid fa-graduation-cap"></i> John Klok </span>
                    <span>80/100</span>
                </li>
                <li>
                    <span><i className="fa-solid fa-graduation-cap"></i> Fidel Martin </span>
                    <span>60/100</span>
                </li>
                <li>
                    <span><i className="fa-solid fa-graduation-cap"></i> George Strong </span>
                    <span>50/100</span>
                </li>
            </ul>
        </div>



        <div className="question__button">
            <Link to="/category"><button className="question-button">Categories <i className="fa-solid fa-book-atlas"></i></button></Link>
            <Link to="/"><button className="question-button"><i className="fa-solid fa-house-chimney"></i> Home</button></Link>
        </div>
        <div className="question__button-small">
            <Link to="/category"><button className="question-button"><i className="fa-solid fa-book-atlas"></i></button></Link>
            <Link to="/"><button className="question-button"><i className="fa-solid fa-house-chimney"></i></button></Link>
        </div>                                                                                                          
    </div>
  )
}

export { Leaderboard }