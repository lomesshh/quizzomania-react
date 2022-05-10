import React, { useEffect, useState } from "react";
import "../../stylesheets/profile.css";
import { useAppSelector } from "frontend/utility";
import { useAppDispatch } from "./../../utility/hooks";
import { handleSignout } from "frontend/redux/Slice/UserSlice";
import { Link, useNavigate } from "react-router-dom";

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

  useEffect(() => {
    const quizzuser = JSON.parse(localStorage.getItem("authUser") || "{}");
    setCurrUser(quizzuser);
  }, [token]);

  return (
    <div className="profile__section">
      <div className="profile__image">
        <div className="image__outer">
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/profileImg_cfof7u.png"
            alt="profile-img"
          />
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
