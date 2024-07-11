import { useState } from "react"
import cardData from './cardData.json';
import GalleryItem from "./GalleryItem";
import s from "../GalleryPhoto/GalleryPhoto.module.css";
const GalleryPhoto = () => {
  const [card, setCard]=useState(cardData);
  const [newCardValue, setNewCardValue]=useState('');


  const handleAddCard=()=>{
    const newCard={id: new Date().getTime(), wishes:newCardValue, completed:false};
    setCard(prev=>[...prev, newCard]);

  };

  const handleDeleteCard=id=>{
    setCard(prev=>prev.filter(item=>item.id!==id));
  }
  return (
    <>
    <div className={s.flex}>
      <input onChange={e=>setNewCardValue(e.target.value)} className={s.input}></input>

      <button onClick={handleAddCard} className={s.btn}>Add wishes</button>
    </div>
    <ul className={s.list}>
      {card.map(item=>(
        <GalleryItem handleDeleteCard={handleDeleteCard} key={item.id} {...item}/>
      ))}
    </ul>
    </>
  )
}

export default GalleryPhoto