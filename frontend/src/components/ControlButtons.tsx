import React from "react";
import { useDispatch } from "react-redux";
import { toggleResultAction } from "../state/controls/controlsActions";

const ControlButtons = () => {
  const dispach = useDispatch();
  const handleResultToggle = () => {
    dispach(toggleResultAction());
  };
  return (
    <div className="d-inline-flex">
      <button className="btn btn-secondary rounded-circle">
        <i className="fas fa-cog"></i>
      </button>
      <button
        onClick={handleResultToggle}
        className="btn btn-info rounded-circle"
      >
        <i className="fas fa-trophy"></i>
      </button>
    </div>
  );
};

export default ControlButtons;
