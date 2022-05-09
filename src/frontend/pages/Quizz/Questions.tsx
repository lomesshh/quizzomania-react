import React, { useState, useEffect, useRef } from 'react'
import "../../stylesheets/questions.css"
import { Link } from 'react-router-dom';
import { useAppSelector } from 'frontend/utility';
import { quizOption } from './../../utility/interface';
import { useAppDispatch } from './../../utility/hooks';
import { getNextQuestion } from 'frontend/redux/Slice/QuizSlice';
import { Notify } from 'frontend/component';

const Questions = () => {

  const { quiz, currQuestion, answeredQuestions } = useAppSelector(state => state.quiz)
  const dispatch = useAppDispatch()
  const [selectedOption, setSelectedOption] = useState("");

  console.log(answeredQuestions)

  const nextQuestionHandler = () => {
      if(selectedOption === "") {
        Notify("Please select any one option", "warning")
      } else {
        dispatch(getNextQuestion({
            question: quiz.questions[currQuestion - 1].question,
            value: selectedOption,
        }))
        setSelectedOption("")
      }
  }

  return (
    <div className="questions-section">
        <h1 className="questions-heading">{quiz.quizzName} quizz</h1>
        <div className="display__timer">
            <h3>{currQuestion}/{quiz.questions.length}</h3>
            <h3><i className="fa-solid fa-stopwatch"></i> 00:56 Sec</h3>
        </div>
        <div className="display__question">
            <h4>{quiz.questions[currQuestion - 1].question}</h4>
            <ul className="stacked-list">
            {quiz.questions[currQuestion - 1].options.map((option: quizOption, index: number) => (
            <li key={index}>
                <label>
                    <input type="radio" name="options" checked={selectedOption === option.value} onChange={() => setSelectedOption(option.value)} />
                    <span>{index + 1}</span>
                </label>
                <span>{option.value}</span>
            </li>
            ))}
            </ul>
        </div>
        <div className="question__button">
            <button className="question-button"><i className="fa-solid fa-arrow-right-from-bracket"> </i> Quit</button>
            <button className="question-button" onClick={nextQuestionHandler}>Next <i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
        <div className="question__button-small">
            <button className="question-button"><i className="fa-solid fa-arrow-left-long"></i></button>
            <Link to="/result"><button className="question-button"><i className="fa-solid fa-arrow-right-long"></i></button></Link>
        </div>                                                                                                          
    </div>
  )
}

export { Questions }