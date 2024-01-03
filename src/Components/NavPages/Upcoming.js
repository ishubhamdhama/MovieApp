import React, { useEffect, useState } from 'react';
import './css/Upcoming.css';
import { Link } from 'react-router-dom';

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
      .then(res => res.json())
      .then(data => setUpcoming(data.results))
      .catch(error => console.log(error.message))
  }, []);

  return (
    <>
      <div className='Upcoming_title'>
        <h2>Upcoming</h2>
        <p>Embark on an exciting cinematic journey with the upcoming slate of movies set to captivate audiences worldwide. From gripping adventures to heartwarming tales and edge-of-your-seat thrillers, the upcoming lineup promises a diverse range of stories and genres.</p>
      </div>
      <div className='Upcoming__cards__container'>
        {upcoming.map((movie) => (
          <Link key={movie.id} style={{ textDecoration: "none", color: "white" }}>
            <div className='Upcoming__Card'>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className='Upcoming__cards__img' />
              <div className='Upcoming__cards__overlay'>
                <div className="Upcoming__cards__title">{movie.original_title}</div>
                <div className="Upcoming__card__runtime">
                  {movie.release_date}
                  <span className="Upcoming__card__rating">{movie.vote_average}<i className="fas fa-star" /></span>
                </div>
                <div className="Upcoming__card__description">{movie.overview.slice(0, 118) + "..."}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Upcoming;
