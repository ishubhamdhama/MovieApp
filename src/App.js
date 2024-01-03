import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/NavPages/Home';
import Error from './Error';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/NavPages/Search';
import PopularCards from './pages/PopularCards';
import Upcoming from './Components/NavPages/Upcoming';
import Mostwatched from './Components/NavPages/Mostwatched';
import About from './Components/NavPages/About';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/top_rated' element={<Mostwatched />} />
        <Route path='/about' element={<About />} />
        <Route path='movies/:type' element={<PopularCards />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}