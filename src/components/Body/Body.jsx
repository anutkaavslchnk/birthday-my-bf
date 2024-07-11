import { useState } from "react";
import swal from 'sweetalert';
import s from './Body.module.css';

const Body = () => {
  const [showBody, setShowBody] = useState(false);

  const [clicks, setClicks] = useState(0);


  const handleAddLove = () => {
    if (clicks >= 1000) {
      swal("А губозакаточну машину не хочеш? 😁");
    } else {
      setClicks(clicks + 200);
    }
  };

  const handleShow = () => {
    setShowBody(true);
  };

  const handleDeleteLove = () => {
    swal("Це неможливо, навіть не намагайся!");
  };



  return (
    <>
      <div className="">
        {!showBody && (
          <>
            <p className={s.par}>Click here on this btn</p>
            <button className={s.btnhandle} onClick={handleShow}>On me</button>
          </>
        )}

        {showBody &&  (
          <>
            <h1 className={s.title}>My love for you: {clicks}</h1>
            <div className={s.btnscont}>
              <button className={s.btns} onClick={handleAddLove}>Add</button>
              <button className={s.btns} onClick={handleDeleteLove}>Remove</button>
            </div>
       
    
        
          </>
        )}

   
      </div>
    </>
  );
}

export default Body;
