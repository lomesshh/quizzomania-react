import React, { useState, useEffect, useCallback } from "react";
import "../../stylesheets/questions.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "frontend/utility";
import { quizOption } from "./../../utility/interface";
import { useAppDispatch } from "./../../utility/hooks";
import { getNextQuestion, quitQuiz } from "frontend/redux/Slice/QuizSlice";

const Questions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { quiz, currQuestion } = useAppSelector((state) => state.quiz);

  const [selectedOption, setSelectedOption] = useState("");
  const [seconds, setSeconds] = useState(10);

  const nextQuestionHandler = useCallback(() => {
    setSeconds(10);
    dispatch(
      getNextQuestion({
        question: quiz.questions[currQuestion - 1].question,
        value: selectedOption,
      })
    );
    setSelectedOption("");
  }, [currQuestion, dispatch, quiz, selectedOption]);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setSeconds((prev) => prev - 1);

      if (seconds === 1) {
        nextQuestionHandler();
        if (currQuestion === quiz.questions.length) {
          navigate("/result");
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [seconds, nextQuestionHandler, navigate, currQuestion, quiz]);

  return (
    <div className="questions-section">
      <h1 className="questions-heading">{quiz.quizzName} quizz</h1>
      <div className="display__timer">
        <h3>
          {currQuestion}/{quiz.questions.length}
        </h3>
        <h3>
          <i className="fa-solid fa-stopwatch"></i> {seconds} Sec
        </h3>
      </div>
      <div className="display__question">
        <h4>{quiz.questions[currQuestion - 1].question}</h4>
        <ul className="stacked-list">
          {quiz.questions[currQuestion - 1].options.map(
            (option: quizOption, index: number) => (
              <li key={index} onClick={() => setSelectedOption(option.value)}>
                <label>
                  <input
                    type="radio"
                    name="options"
                    checked={selectedOption === option.value}
                  />
                  <span>{index + 1}</span>
                </label>
                <span>{option.value}</span>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="question__button">
        <Link to="/category">
          <button
            className="question-button"
            onClick={() => dispatch(quitQuiz([]))}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"> </i> Quit
          </button>
        </Link>
        {currQuestion === quiz?.questions?.length ? (
          <button
            className="question-button"
            onClick={() => {
              nextQuestionHandler();
              navigate("/result");
            }}
          >
            Result <i className="fa-solid fa-book-open-reader"></i>
          </button>
        ) : (
          <button className="question-button" onClick={nextQuestionHandler}>
            Next <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        )}
      </div>
      <div className="question__button-small">
        <Link to="/category">
          <button
            className="question-button"
            onClick={() => dispatch(quitQuiz([]))}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"> </i>
          </button>
        </Link>

        {currQuestion === quiz?.questions?.length ? (
          <button
            className="question-button"
            onClick={() => {
              nextQuestionHandler();
              navigate("/result");
            }}
          >
            <i className="fa-solid fa-book-open-reader"></i>
          </button>
        ) : (
          <button className="question-button" onClick={nextQuestionHandler}>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export { Questions };
