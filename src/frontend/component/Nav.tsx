import React from "react";
import "../stylesheets/homepage.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "frontend/utility";
import { handleSignout } from "frontend/redux/Slice/UserSlice";
import { useAppDispatch } from "./../utility/hooks";

const Nav = () => {
  const { token } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img
          className="nav-logo"
          src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/quizzlogo_mjesmc.png"
          alt="nav-logo"
        />
      </Link>
      <div className="nav-option">
        <ul>
          {!token && (
            <li>
              <Link to="/login">
                <button>
                  <i className="fa-solid fa-arrow-right-to-bracket"> </i> Login
                </button>
              </Link>
            </li>
          )}
          {token && (
            <li>
              <Link to="/">
                <button onClick={() => dispatch(handleSignout(navigate))}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              </Link>
            </li>
          )}
          <li>
            <Link to={`${token ? `/leaderboard` : `/login`}`}>
              <p>
                <i className="fa-solid fa-medal"></i> Leaderboard
              </p>
            </Link>
          </li>
          <li>
            <Link to={`${token ? `/profile` : `/login`}`}>
              <p>
                <i className="far fa-user"></i>Profile
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Nav };
