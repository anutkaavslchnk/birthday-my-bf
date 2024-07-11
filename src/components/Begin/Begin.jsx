import s from './Begin.module.css';

const Begin = ({handleOpenModal}) => {




  return (
    <>
    <h1 className={s.title}>Hi, honey!</h1>
    <p className={s.forhimsmth}>I have smth for you</p>
    <p>Please, press the button</p>
    <button  className={s.btn}onClick={handleOpenModal}>Here</button>
    </>
  )
}

export default Begin