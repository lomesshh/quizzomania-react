import React, { useRef } from "react";
import "../../stylesheets/result.css";
import { Link } from "react-router-dom";
import { QuestionType, quizOption, useAppSelector } from "frontend/utility";
import { useAppDispatch } from "./../../utility/hooks";
import { resetQuiz } from "frontend/redux/Slice/QuizSlice";

const Result = () => {
  const { quiz, answeredQuestions } = useAppSelector((state) => state.quiz);
  const totalScore = useRef(0);
  const dispatch = useAppDispatch();

  if (answeredQuestions.length !== 0) {
    let total = 0;
    for (let i = 0; i < quiz.questions.length; i++) {
      for (let option of quiz.questions[i].options) {
        if (answeredQuestions[i].value === option.value && option.isRight) {
          total += Number(quiz.questions[i].points);
        }
      }
    }
    totalScore.current = total;
  }

  const getOptionClassname = (
    option: quizOption,
    answeredQuestions: any[],
    index: number
  ) => {
    if (option.isRight) {
      return "correct__answer";
    } else if (
      answeredQuestions[index].value === option.value &&
      !option.isRight
    ) {
      return "wrong__answer";
    } else {
      return "";
    }
  };

  return (
    <div className="questions-section">
      <h1 className="questions-heading">Final Score</h1>
      <h4>
        <i className="fa-solid fa-trophy"></i> Your Score {totalScore.current} /
        250
      </h4>
      {totalScore.current >= 150 ? (
        <h4>You passed the test 🚀</h4>
      ) : (
        <h4>Better luck next time 🥺</h4>
      )}
      <h3>Check Answers</h3>
      <div className="display__question">
        {quiz.questions.map((question: QuestionType, index: number) => (
          <div>
            <h4>{question.question}</h4>
            {answeredQuestions[index].value === "" && (
              <p className="not__selected">Option not selected</p>
            )}
            {question.options.map((option: quizOption) => {
              return (
                <ul className="stacked-list">
                  <li
                    className={`${getOptionClassname(
                      option,
                      answeredQuestions,
                      index
                    )}`}
                  >
                    <span>{option.value}</span>
                  </li>
                </ul>
              );
            })}
          </div>
        ))}
      </div>

      <div className="question__button">
        <Link to="/category">
          <button
            className="question-button"
            onClick={() => dispatch(resetQuiz())}
          >
            Restart <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
        </Link>
        <Link to="/">
          <button
            className="question-button"
            onClick={() => dispatch(resetQuiz())}
          >
            <i className="fa-solid fa-house-chimney"></i> Home
          </button>
        </Link>
      </div>

      <div className="question__button-small">
        <Link to="/category">
          <button
            className="question-button"
            onClick={() => dispatch(resetQuiz())}
          >
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
        </Link>
        <Link to="/">
          <button
            className="question-button"
            onClick={() => dispatch(resetQuiz())}
          >
            <i className="fa-solid fa-house-chimney"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Result };
