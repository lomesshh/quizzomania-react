import React from 'react'
import "../../stylesheets/result.css"
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <div className="questions-section">
        <h1 className="questions-heading">Final Score</h1>
        <div className="display__timer">
            <h4><i className="fa-solid fa-trophy"></i> Your Score 60 / 100</h4>
        </div>
        <h3>Check Answers</h3>
        <div className="display__question">
            <h4>Q.1  What of the following is used in React.js to increase performance ?</h4>
            <ul className="stacked-list">
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>Original DOM</span>
                </li>
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>Virtual DOM</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>C</span>
                    </label>
                    <span>Both A and B</span>
                </li>
                <li className="wrong__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>D</span>
                    </label>
                    <span>None of the above</span>
                </li>
            </ul>
        </div>


        <div className="display__question">
            <h4>Q.2 What command is used to start the React local development server ?</h4>
            <ul className="stacked-list">
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>npm serve</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>npm build</span>
                </li>
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>C</span>
                    </label>
                    <span>npm start</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>D</span>
                    </label>
                    <span>npm run dev</span>
                </li>
            </ul>
        </div>


        <div className="display__question">
            <h4>Q.3 What is the default local host port that a React development server uses ?</h4>
            <ul className="stacked-list">
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>5000</span>
                </li>
                <li className="wrong__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>3500</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>C</span>
                    </label>
                    <span>8080</span>
                </li>
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>D</span>
                    </label>
                    <span>3000</span>
                </li>
            </ul>
        </div>

        <div className="display__question">
            <h4>Q.4 To develop and run React code, Node.js is required.</h4>
            <ul className="stacked-list">
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>True</span>
                </li>
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>False</span>
                </li>
            </ul>
        </div>

        <div className="display__question">
            <h4>Q.5 Which keyword creates a constant in JavaScript ?</h4>
            <ul className="stacked-list">
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>let</span>
                </li>
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>const</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>C</span>
                    </label>
                    <span>var</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>D</span>
                    </label>
                    <span>constant</span>
                </li>
            </ul>
        </div>

        <div className="display__question">
            <h4>Q.6 A copy of the 'real' DOM that is kept in memory is called what ?</h4>
            <ul className="stacked-list">
                <li className="wrong__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>Shadow DOM</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>DOM</span>
                </li>
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>C</span>
                    </label>
                    <span>Virtual DOM</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>D</span>
                    </label>
                    <span>React DOM</span>
                </li>
            </ul>
        </div>

        <div className="display__question">
            <h4>Q.7 What tool does React use to compile JSX ?</h4>
            <ul className="stacked-list">
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>React Router</span>
                </li>
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>Babel</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>C</span>
                    </label>
                    <span>JSX Compiler</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>D</span>
                    </label>
                    <span>ReactDOM</span>
                </li>
            </ul>
        </div>

        <div className="display__question">
            <h4>Q.8 React can only render elements in the root document element.</h4>
            <ul className="stacked-list">
                <li className="wrong__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>True</span>
                </li>
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>False</span>
                </li>
            </ul>
        </div>

        <div className="display__question">
            <h4>Q.9 Which operator can be used to conditionally render a React component ?</h4>
            <ul className="stacked-list">
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>::</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>??</span>
                </li>
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>C</span>
                    </label>
                    <span>&&</span>
                </li>
                <li>
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>D</span>
                    </label>
                    <span>||</span>
                </li>
            </ul>
        </div>

        <div className="display__question">
            <h4>Q.10 React component names must begin with an uppercase letter.</h4>
            <ul className="stacked-list">
                <li className="correct__answer">
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>A</span>
                    </label>
                    <span>True</span>
                </li>
                <li >
                    <label>
                        <input type="radio" name="options" disabled/>
                        <span>B</span>
                    </label>
                    <span>False</span>
                </li>
            </ul>
        </div>


        <div className="question__button">
            <Link to="/category"><button className="question-button">Restart <i className="fa-solid fa-arrow-rotate-right"></i></button></Link>
            <Link to="/"><button className="question-button"><i className="fa-solid fa-house-chimney"></i> Home</button></Link>
        </div>
        <div className="question__button-small">
            <Link to="/category"><button className="question-button"><i className="fa-solid fa-arrow-rotate-right"></i></button></Link>
            <Link to="/"><button className="question-button"><i className="fa-solid fa-house-chimney"></i></button></Link>
        </div>                                                                                                          
    </div>
  )
}

export { Result }