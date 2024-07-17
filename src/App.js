import logo from './logo.svg';
import './App.css';
import Nav from './compo/Nav';
import List from './compo/List';
import { useState } from 'react';


function App() {
  const [search, setsearch] = useState("")
  return (
    
    <div>
      <Nav setsearch={setsearch}/>
      <List search={search}/>
    </div>
  )
}

export default App;
