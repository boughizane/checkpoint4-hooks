import React,{useState} from 'react'
import Modal from './Modal'

const Carts = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='carts'>
    {show?<Modal el={el} setshow={setshow}/>:null}
    <img onClick={()=>setshow(true)} src={el.image}/>
    </div>

  )
}

export default Carts