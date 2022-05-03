import React from "react";
import "../stylesheets/loader.css";

const Loader = () => {
  return (
    <div className="loader__outer">
      <svg
        className="loderSvg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="46" />
      </svg>
    </div>
  );
};

export { Loader };
