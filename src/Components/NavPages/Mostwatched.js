import React, { useEffect, useState } from 'react';
import './css/Mostwatched.css';
import { Link } from 'react-router-dom';

const Mostwatched = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
      .then(res => res.json())
      .then(data => setTopRated(data.results)) 
      .catch(error => console.log(error.message))
  }, []);

  return (
    <>
      <div className='topRated_title'>
        <h2>Top Rated</h2>
        <p>Discover the cinematic gems that have earned their place as the top-rated movies in the world of entertainment. From timeless classics to modern masterpieces, these films have garnered acclaim for their exceptional storytelling, captivating performances, and visionary direction.</p>
      </div>
      <div className='topRated__cards__container'>
        {topRated.map((movie) => (
          <Link key={movie.id} style={{ textDecoration: "none", color: "white" }}>
            <div className='topRated__Card'>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className='topRated__cards__img' />
              <div className='topRated__cards__overlay'>
                <div className="topRated__cards__title">{movie.original_title}</div>
                <div className="topRated__card__runtime">
                  {movie.release_date}
                  <span className="topRated__card__rating">{movie.vote_average}<i className="fas fa-star" /></span>
                </div>
                <div className="topRated__card__description">{movie.overview.slice(0, 118) + "..."}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Mostwatched;
