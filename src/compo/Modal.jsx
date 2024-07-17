import React,{ useState }from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const Modal = ({setshow,el}) => {
  const [change, setchange] = useState("")
  const [changee, setchangee] = useState("")
  return (
    <div className='modal'>
        <div className='box_modal'>
            <button id="btn"onClick={()=>setshow(false)}>X</button>
            <h1>{el.name}</h1>
            <h2>{el.type}</h2>
            <AiFillLike className={change} onClick={()=>change=="colorize"?setchange(""):setchange("colorize")} id='like' />
            <AiFillDislike  className={changee} onClick={()=>changee=="colorize"?setchangee(""):setchangee("colorize")} id='like'/>
            <img src={el.stars}/>
            <h2>{el.discreption}</h2>
            

        </div>
      
    </div>
  )
}

export default Modal