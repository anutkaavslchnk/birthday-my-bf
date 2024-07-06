import { useState } from "react";
import Begin from "./components/Begin/Begin";
import Modal from "./components/Modal/Modal";
import Body from "./components/Body/Body";
// import Balloons from "./components/Balloons/Balloons";
import s from '../src/App.module.css';
import Balloons from "./components/Balloons/Balloons";

const App = () => {
  // const [questionBefore, setQuestionBefore] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow]=useState(false);
  const[balloons, setBalloons]=useState(false);

const handleBalloons=()=>{
  setBalloons(true);
}
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



  return (
    <>
    <Begin handleOpenModal={handleOpenModal} />
      {/* {questionBefore === "Yes kicia" && (
        <Begin handleOpenModal={handleOpenModal} />
      )} */}
      {isOpen && (
        <Modal handleCloseModal={handleCloseModal} />
      )}
      <button onClick={handleShow}>Next step</button>
      {show && (<Body />)}

<p>Today everything is for you! Balloons for Dany!</p>
<button onClick={handleBalloons} className={s.balloons}>Balloons!</button>
<button onClick={()=>setBalloons(false)}>Stop</button>
{balloons&&(<Balloons/>)}
    </>
  );
};

export default App;
