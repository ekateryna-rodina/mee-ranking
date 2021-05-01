import React from "react";

const ControlButtons = () => {
  return (
    <div className="d-inline-flex">
      <a href="#results" className="btn btn-secondary rounded-circle">
        <i className="fas fa-cog"></i>
      </a>
      <a href="#results" className="btn btn-info rounded-circle">
        <i className="fas fa-trophy"></i>
      </a>
    </div>
  );
};

export default ControlButtons;
