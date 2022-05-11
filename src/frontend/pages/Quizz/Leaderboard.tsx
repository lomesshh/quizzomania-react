import React, { useEffect } from "react";
import "../../stylesheets/leaderboard.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "frontend/utility";
import { useAppDispatch } from "./../../utility/hooks";
import { getAllUserHandler } from "frontend/service/UserService";

const Leaderboard = () => {
  const { allUsers } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getClassName = (index: number) => {
    if (index === 0) {
      return "first__rank";
    } else if (index === 1) {
      return "second__rank";
    } else if (index === 2) {
      return "third__rank";
    } else {
      return "";
    }
  };

  useEffect(() => {
    dispatch(getAllUserHandler());
  }, [dispatch]);

  return (
    <div className="questions-section">
      <div className="highscore__title">
        <div className="trophy__image">
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151559/quizzomania/trophy_vgsufg.png"
            alt="trophy-img"
          />
        </div>
        <h1 className="">Leaderboard</h1>
        <p>
          The score will take care of itself when you take care of the effort
          that precedes the score
        </p>
        <h4>- john wooden</h4>
      </div>
      <h3>Check Top - 5 scores</h3>
      <div className="display__question">
        <ul className="stacked-list">
          {allUsers
            .slice(0, 5)
            .sort((a, b) => b.score - a.score)
            .map((user, index) => (
              <li className={`${getClassName(index)}`}>
                <span>
                  <i className="fa-solid fa-graduation-cap"></i> {user.name}
                </span>
                <span>{user.score}</span>
              </li>
            ))}
        </ul>
      </div>

      <div className="question__button">
        <Link to="/category">
          <button className="question-button">
            Categories <i className="fa-solid fa-book-atlas"></i>
          </button>
        </Link>
        <Link to="/">
          <button className="question-button">
            <i className="fa-solid fa-house-chimney"></i> Home
          </button>
        </Link>
      </div>
      <div className="question__button-small">
        <Link to="/category">
          <button className="question-button">
            <i className="fa-solid fa-book-atlas"></i>
          </button>
        </Link>
        <Link to="/">
          <button className="question-button">
            <i className="fa-solid fa-house-chimney"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Leaderboard };
