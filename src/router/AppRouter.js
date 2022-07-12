import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';
import Details from '../pages/details/Details';


const AppRouter = () => {
  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter