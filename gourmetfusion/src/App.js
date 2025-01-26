import './App.css';
import Nav from './components/Nav'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sustainability from './pages/Sustainability';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [hamBurger,setHamBurger]=useState(false);
  const [temp,setTemp]=useState('about');
  return (
    <div className="App" >
     <Nav  hamBurger={hamBurger} setHamBurger={setHamBurger}/>
    <Sidebar  hamBurger={hamBurger} setHamBurger={setHamBurger}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/sustainability' element={<Sustainability/>}/>
      <Route path='/feedback' element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
