import React from 'react'
import List from './List'
import { useState } from 'react';
import Nav from './Nav'

const Houme = () => {
  const [search, setsearch] = useState("")
  return (

    <div> 
        <Nav setsearch={setsearch}/>
        <List search={search}/>
    </div>
  )
}

export default Houme
