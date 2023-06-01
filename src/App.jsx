import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/header'
import Navbar from './components/navbar'
import Home from './components/home'
import Responsive from './components/responsive'

const App=()=> {
  return (
    
    <>
    <Navbar/>
    <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/home" element={<Responsive/>}/>
    </Routes>
    

    </>
  );
}

export default App;
