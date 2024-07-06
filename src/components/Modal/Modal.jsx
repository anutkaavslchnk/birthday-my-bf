import { useEffect } from 'react';
import s from './Modal.module.css'

const Modal = ({handleCloseModal}) => {
useEffect(()=>{
const handleKeyDown=e=>{
if(e.key==="Escape"){
    handleCloseModal();
}
}
document.addEventListener('keydown', handleKeyDown);
})
    const handleBackdropClick=(e)=>{

if(e.target===e.currentTarget){
handleCloseModal();
}
    }
  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
        <div className={s.content}>
            <>
            <h1>Congratulations, darling</h1>
            <hr />
            <p>Here is all of my wishes for you:</p>
            <p className={s.congrats}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis saepe, dolore eius quod commodi cupiditate? Esse, voluptatibus? Aperiam nesciunt commodi illum quia, possimus facilis? Tempora culpa reprehenderit id est.</p>


            </>
            <button  onClick={handleCloseModal} className={s.close} >×</button>
        </div>
    </div>
  )
}

export default Modal