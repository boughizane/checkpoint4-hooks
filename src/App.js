import logo from './logo.svg';
import './App.css';
import Nav from './compo/Nav';
import List from './compo/List';
import About from './About';
import { Routes,Route} from 'react-router-dom';
import Login from './compo/Login';
import Houme from './compo/Houme';


function App() {
 
  return (
    
    <div>
       
       <Routes>
        <Route path='/' element={<Login/>} />
       <Route  path='/Houme' element={<Houme/>}/>

       </Routes>
     
    </div>
  )
}

export default App;
