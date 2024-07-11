import s from "../GalleryPhoto/GalleryPhoto.module.css";

const GalleryItem = ({handleDeleteCard, id, wishes}) => {
  return (
<li className={s.item}>
    
    <span>You are the best: {wishes}</span>
   
    <button onClick={()=>handleDeleteCard(id)} size='18px'>Delete
    </button>
</li>
  )
}

export default GalleryItem