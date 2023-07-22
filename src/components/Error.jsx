import React, { useEffect, useState } from "react";
import "./Error.css";

const Error = () => {
  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 800);
  }, []);

  return (
    <div className="imageDisplay">
      <img src="/Images/Error_Img.jpg" className="imageL1" alt="" />
    </div>
  );
};

export default Error;
