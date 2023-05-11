import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/header'
import Navbar from './components/navbar'
import Home from './components/home'

const App=()=> {
  return (
    
    <>
    <Navbar/>
    <Routes>
        <Route path="" element={<Home/>}/>
      
    </Routes>
    

    </>
  );
}

export default App;
