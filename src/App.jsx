import { useState, useEffect } from "react";
import Begin from "./components/Begin/Begin";
import Modal from "./components/Modal/Modal";
import swal from 'sweetalert';
import s from '../src/App.module.css';
import BalloonsModal from "./components/BalloonsModal/BalloonsModal";
import Body from "./components/Body/Body";
import Kisses from "./components/Kisses/Kisses";

const App = () => {
  const [questionBefore, setQuestionBefore] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openBalloonsModal, setOpenBalloonsModal] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showBalloonsButton, setShowBalloonsButton] = useState(false);
  const [showKissesButton, setShowKissesButton] = useState(false);
  const [openKissesModal, setOpenKissesModal] = useState(false);

  useEffect(() => {
    let userResponse = null;
    while (userResponse !== "Yes kicia") {
      userResponse = prompt("Confirm that you miliy, if yes type - Yes kicia");
      if (userResponse === "Yes kicia") {
        swal("Ok, you confirmed that you are my Dany");
        setQuestionBefore(userResponse);
      } else {
        alert("Try again");
      }
    }
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setShowBody(true);
  };

  const handleOpenBalloonsModal = () => {
    setOpenBalloonsModal(true);
  };

  const handleCloseBalloonsModal = () => {
    setOpenBalloonsModal(false);
    setShowBalloonsButton(false); 
    setShowBody(false); 
    setIsOpen(false); 
    setShowKissesButton(true); 
  };

  const handleNextPage = () => {
    setShowBody(false);
    setShowBalloonsButton(true);
  };

  const handleCloseKisses = () => {
    setOpenKissesModal(false);
  };

  const handleOpenKisses = () => {
    setOpenKissesModal(true);
  };

  return (
    <>
      <div className={s.cont}>
        <div className={s.wave}></div>
        <div className={s.wave}></div>
        <div className={s.wave}></div>
        
        {questionBefore === "Yes kicia" && !showBody && !showBalloonsButton && !showKissesButton && (
          <Begin handleOpenModal={handleOpenModal} />
        )}
        
        {isOpen && (
          <Modal handleCloseModal={handleCloseModal} />
        )}

        {showBody && <Body onNextPage={handleNextPage} />}

        {showBalloonsButton && (
          <button className={s.btnballoon} onClick={handleOpenBalloonsModal}>
            Balloons
          </button>
        )}

        {openBalloonsModal && (
          <BalloonsModal handleCloseBalloonsModal={handleCloseBalloonsModal} />
        )}

        {showKissesButton && ( 
          <button className={s.kisses} onClick={handleOpenKisses}>A lot of kisses</button>
        )}

        {openKissesModal && (
          <Kisses handleCloseKisses={handleCloseKisses} />
        )}
      </div>
    </>
  );
};

export default App;
