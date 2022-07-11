import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Login from '../pages/login/Login';
import About from '../pages/about/About';


const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='github' />
        <Route path='/' element={<Login/>}/>
        
        


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter