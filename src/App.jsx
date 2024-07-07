import {useState } from "react";
import Begin from "./components/Begin/Begin";
import Modal from "./components/Modal/Modal";
import Body from "./components/Body/Body";

// import s from '../src/App.module.css';

import BalloonsModal from "./components/BalloonsModal/BalloonsModal";

const App = () => {
  // const [questionBefore, setQuestionBefore] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow]=useState(false);
 
  const [openBalloonsModal, setOpenBalloonsModal]=useState(false);


const handleShow=()=>{
  setShow(true);
}


  // useEffect(() => {
  //   let userResponse = null;
  //   while (userResponse !== "Yes kicia") {
  //     userResponse = prompt("Confirm that you miliy, if yes type - Yes kicia");
  //     if (userResponse === "Yes kicia") {
  //       alert("Ok, you confirmed that you are my Dany");
  //       setQuestionBefore(userResponse);
  //     } else {
  //       alert("Try again");
  //     }
  //   }
  // }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

const handleOpenBalloonsModal=()=>{
setOpenBalloonsModal(true);
}
const handleCloseBalloonsModal=()=>{
  setOpenBalloonsModal(false);
  }

  return (
    <>
    {/* <Begin handleOpenModal={handleOpenModal} />
      {questionBefore === "Yes kicia" && (
        <Begin handleOpenModal={handleOpenModal} />
      )} */}
      <Begin handleOpenModal={handleOpenModal} />
      {isOpen && (
        <Modal handleCloseModal={handleCloseModal} />
      )}
      <button onClick={handleShow}>Next step</button>
      {show && (<Body />)}


<button onClick={handleOpenBalloonsModal}>Balloons</button>
{openBalloonsModal&&(
  <BalloonsModal handleCloseBalloonsModal={handleCloseBalloonsModal}></BalloonsModal>
)}
    </>
  );
};

export default App;
