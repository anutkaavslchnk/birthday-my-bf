import { useState, useEffect } from "react";
import Begin from "./components/Begin/Begin";
import Modal from "./components/Modal/Modal";
import swal from 'sweetalert';
import s from '../src/App.module.css';
import BalloonsModal from "./components/BalloonsModal/BalloonsModal";
import Body from "./components/Body/Body";
// import GalleryPhoto from "./components/GalleryPhoto/GalleryPhoto";

const App = () => {
  const [questionBefore, setQuestionBefore] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openBalloonsModal, setOpenBalloonsModal] = useState(false);
  const [showBody, setShowBody] = useState(false);




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

  // const handleOpenBalloonsModal = () => {
  //   setOpenBalloonsModal(true);
  // };

  const handleCloseBalloonsModal = () => {
    setOpenBalloonsModal(false);
  };

  return (
    <>
      <div className={s.cont}>
        <div className={s.wave}></div>
        <div className={s.wave}></div>
        <div className={s.wave}></div>
        {/* <Begin handleOpenModal={handleOpenModal} /> */}
        {questionBefore === "Yes kicia" && !showBody && (
          <Begin handleOpenModal={handleOpenModal} />
        )}
        
        {isOpen && (
          <Modal handleCloseModal={handleCloseModal} />
        )}

        {showBody && <Body />}

        
        {/* <button className={s.btnballoon} onClick={handleOpenBalloonsModal}>
          Balloons
        </button> */}
        {openBalloonsModal && (
          <BalloonsModal handleCloseBalloonsModal={handleCloseBalloonsModal}></BalloonsModal>
        )}
        {/* <GalleryPhoto></GalleryPhoto> */}
      </div>
    </>
  );
};

export default App;
