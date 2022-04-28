import React from 'react'
import "../../stylesheets/questions.css"
import { Link } from 'react-router-dom';

const Questions = () => {
  return (
    <div className="questions-section">
        <h1 className="questions-heading">React quizz</h1>
        <div className="display__timer">
            <h3>1/10</h3>
            <h3><i className="fa-solid fa-stopwatch"></i> 00:56 Sec</h3>
        </div>
        <div className="display__question">
            <h4>Q.1  What of the following is used in React.js to increase performance?</h4>
            <ul className="stacked-list">
                <li>
                    <label>
                        <input type="radio" name="options"/>
                        <span>A</span>
                    </label>
                    <span>Original DOM</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options"/>
                        <span>B</span>
                    </label>
                    <span>Virtual DOM</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options"/>
                        <span>C</span>
                    </label>
                    <span>Both A and B</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options"/>
                        <span>D</span>
                    </label>
                    <span>None of the above</span>
                </li>
            </ul>
        </div>
        <div className="question__button">
            <button className="question-button"><i className="fa-solid fa-arrow-left-long"></i> Previous</button>
            <Link to="/result"><button className="question-button">Next <i className="fa-solid fa-arrow-right-long"></i></button></Link>
        </div>
        <div className="question__button-small">
            <button className="question-button"><i className="fa-solid fa-arrow-left-long"></i></button>
            <Link to="/result"><button className="question-button"><i className="fa-solid fa-arrow-right-long"></i></button></Link>
        </div>                                                                                                          
    </div>
  )
}

export { Questions }