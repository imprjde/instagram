import React, { useEffect, useState } from "react";
import "./Home.css";
import Modal from "./Modal";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 800);
  }, []);

  return (
    <div>
      {showModal && <Modal />}
      <img src="/Images/IGHome.jpg" className="image" alt="" />
    </div>
  );
};

export default Home;
