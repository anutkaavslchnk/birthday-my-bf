import { useEffect, useState } from "react";
import s from './BalloonsModal.module.css'
import Balloons from "../Balloons/Balloons";


const BalloonsModal = ({handleCloseBalloonsModal}) => {

    const[balloons, setBalloons]=useState(false);

    const handleBalloons=()=>{
        setBalloons(true);
      }
    useEffect(()=>{
        const handleKeyDown=e=>{
        if(e.key==="Escape"){
            handleCloseBalloonsModal();
        }
        }
        document.addEventListener('keydown', handleKeyDown);
        })
            const handleBackdropClick=(e)=>{
        
        if(e.target===e.currentTarget){
            handleCloseBalloonsModal();
        }
            }
          return (
            <div className={s.wrapper} onClick={handleBackdropClick}>
                <div className={s.content}>
                    <>
                    <p>Today everything is for you! Balloons for Dany!</p>
                    <button onClick={handleBalloons} className={s.balloons}>Balloons!</button>
<button onClick={()=>setBalloons(false)}>Stop</button>
                    <hr />
                   

{balloons&&(<Balloons></Balloons>)}

        
                    </>
                    <button  onClick={handleCloseBalloonsModal} className={s.close} >×</button>
                </div>
            </div>
          )
}

export default BalloonsModal