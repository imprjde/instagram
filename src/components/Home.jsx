import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "./Home.css";
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
