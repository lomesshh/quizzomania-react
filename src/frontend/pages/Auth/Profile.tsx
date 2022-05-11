import React, { useEffect, useState } from "react";
import "../../stylesheets/profile.css";
import { useAppSelector } from "frontend/utility";
import { useAppDispatch } from "./../../utility/hooks";
import { handleSignout } from "frontend/redux/Slice/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

interface UserData {
  email: string;
  name: string;
  quiz: any;
  score: number;
  uid: string;
}

const Profile = () => {
  const { token, user } = useAppSelector((state) => state.user);
  const [curruser, setCurrUser] = useState<UserData | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let totalScore = user.quiz.length * 250;
  let wrongScore = totalScore - Number(user.score);

  let correctPercentage = (Number(user.score) / totalScore) * 100;
  let wrongPercentage = (wrongScore / totalScore) * 100;

  const data = {
    labels: [
      `${correctPercentage.toFixed(2)}% Correct`,
      `${wrongPercentage.toFixed(2)}% Wrong`,
    ],
    datasets: [
      {
        label: "Your accuracy rate",
        data: [correctPercentage.toFixed(2), wrongPercentage.toFixed(2)],
        backgroundColor: ["rgba(59, 221, 102, 0.2)", "rgba(229, 41, 82, 0.2)"],
        borderColor: ["#45d871", "#d02d50"],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const quizzuser = JSON.parse(localStorage.getItem("authUser") || "{}");
    setCurrUser(quizzuser);
  }, [token]);

  return (
    <div className="profile__section">
      <div className="profile__image">
        <div className="image__outer">
          <h3>Your accuracy rate</h3>
          <Pie data={data} />
        </div>
      </div>

      <div className="profile__info">
        <div className="profile__name">
          <h1>{user?.name}</h1>
          <p>{user?.email}</p>
          <Link to="/">
            <button
              className="large__screen-button"
              onClick={() => dispatch(handleSignout(navigate))}
            >
              Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </Link>
          <button className="small__screen-button">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
        <div className="profile__about">
          <h4>Name : </h4>
          <p>{curruser?.name}</p>

          <h4>Email : </h4>
          <p>{curruser?.email}</p>

          <h3 className="all__score">All score</h3>
          <div className="display__question">
            <ul className="stacked-list">
              {user.quiz.map((quiz, index) => (
                <li>
                  <span>
                    <i className="fa-solid fa-graduation-cap"></i>{" "}
                    {quiz.quizname}
                  </span>
                  <span>{quiz.score}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };
