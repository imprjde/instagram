import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="content">
          <h3>
            You need to Login to your <br /> Instagram to Continue...
          </h3>
        </div>
        <Link to="/login">
          <button className="btten">Login to Instagram </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
