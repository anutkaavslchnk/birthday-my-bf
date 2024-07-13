import { useEffect, useState } from "react";
import s from './Kisses.module.css';
import KissesAnimations from "./KissesAnimations";

const Kisses = ({ handleCloseKisses }) => {
  const [kisses, setKisses] = useState(false);

  const handleKisses = () => {
    setKisses(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseKisses();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCloseKisses]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseKisses();
    }
  };

  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <p>Today everything is for you! Balloons for Dany!</p>
        <button className={s.modalbtns} onClick={handleKisses} >Kisses!</button>
        <button className={s.modalbtns} onClick={() => setKisses(false)}>Stop</button>
        <hr />
        {kisses && (
      <KissesAnimations></KissesAnimations>
        )}
        <button onClick={handleCloseKisses} className={s.close}>×</button>
      </div>
    </div>
  );
};

export default Kisses;
