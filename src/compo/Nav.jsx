import React from 'react'


const Nav = ({setsearch}) => {
  return (
         <div>
        <nav>
                <img src="https://i-egybest.com/wp-content/themes/vo2023/assets/images/logo.png"/>
                <ul >
                  <li id='ul'>About</li>
                  <li  id='ul'>carer</li>
    
                  <li>servise</li>



                </ul>
                <div className='serch'>
                <input onChange={(e)=>setsearch(e.target.value)} placeholder='Serch about the series...' type="text"/>
                <button className='add'>add</button>
                </div>
        </nav>
      
    </div>
  )
}

export default Nav
