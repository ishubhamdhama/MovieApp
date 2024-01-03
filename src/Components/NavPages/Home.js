import React from 'react';
import '../../css/Home.css';
import HomeCards from '../../pages/HomeCards';
import PopularCards from '../../pages/PopularCards';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
    <div className='home'>
      {/* <p className='container'>Dive into a world of cinematic wonders with MovieFlip, where the silver screen meets your fingertips. As avid movie enthusiasts, we curate an immersive experience that celebrates the magic of film.From timeless classics to the latest blockbusters, our platform offers an extensive collection of movies across genres. Whether you're seeking heartwarming dramas, adrenaline-pumping action, or mind-bending thrillers, MovieFlip is your gateway to an endless reel of entertainment.</p> */}
      <HomeCards/>
      <PopularCards/>
      <Footer/>
    </div>
    </>
  )
}

export default Home