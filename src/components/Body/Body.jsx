import { useState } from "react";


const Body = () => {

    const [clicks, setClicks]=useState(0);
    const handleAddLove = () => {
        if (clicks >= 1000) {
          alert("А губозакаточну машину не хочеш? 😁");
        } else {
          setClicks(clicks + 200);
        }
      };

const handleDeleteLove=()=>{
  alert("Це неможливо, навіть не намагайся!")
}
  return (
    <>
<p>Тисни тут</p>

<h1>My love for you: {clicks}</h1>
<button onClick={handleAddLove}>Збільшити</button>
<button onClick={handleDeleteLove}>Зменшити</button>
    </>
  )
}

export default Body