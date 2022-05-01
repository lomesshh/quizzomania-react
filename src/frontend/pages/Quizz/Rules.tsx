import React from 'react'
import "../../stylesheets/rules.css"
import { Link } from 'react-router-dom';

const Rules = () => {
  return (
    <div className="rules-section">
        <h1 className="rules-heading">Rules for the quiz</h1>
        <h4>Please read the following instructions
            carefully before starting with the quiz</h4>
        <ul className="stacked-list">
            <li><span><i className="fa-solid fa-graduation-cap"></i> The participants shall not be allowed to use mobile.</span></li>
            <li><span><i className="fa-solid fa-graduation-cap"></i> The questions shall be in the form of MCQ or True / False statement.</span></li>
            <li><span><i className="fa-solid fa-graduation-cap"></i> You cannot switch to another tab while attempting the quiz.</span></li>
            <li><span><i className="fa-solid fa-graduation-cap"></i> Time limit for the quiz is 10 minutes only.</span></li>
            <li><span><i className="fa-solid fa-graduation-cap"></i> You will get 60 seconds to answer the One question.</span></li>
            <li><span><i className="fa-solid fa-graduation-cap"></i> There is no negative marking for wrong answer.</span></li>
        </ul>
        <Link to="/question"><button className="rule-button">Start the quizz <i className="fa-solid fa-arrow-right-long"></i></button></Link>                                                                                                                
    </div>
  )
}

export { Rules }