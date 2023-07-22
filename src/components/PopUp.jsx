import React from "react";
import "./PopUp.css";
import { useNavigate } from "react-router-dom";

const PopUp = () => {
  const navigate = useNavigate();
  return (
    <div className="rtx1">
      <div className="rtx2">
        <div className="rtx3">
          <span className="rtx4">Incorrect Password</span>
        </div>
        <div className="rtx5">
          <h3 className="rtx6">
            The password you entered is incorrect. Please try again.
          </h3>
        </div>
        <div className="rtx7"></div>
        <span onClick={() => navigate("/instagram")} className="rtx8">
          Try Again
        </span>
      </div>
    </div>
  );
};

export default PopUp;
