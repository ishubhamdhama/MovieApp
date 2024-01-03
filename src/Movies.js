import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
import './css/Movies.css';

const Movies = () => {
  const { isMovie } = useGlobalContext();
  const moviesList = isMovie.Search || [];
  return (
    <>
      <div className='movies__cards__container'>
        {moviesList.map((movie) => (
          <Link key={movie.id} style={{ textDecoration: "none", color: "white" }}>
            <div className='movies__Card'>
              <img src={movie.Poster} alt={movie.imdbID} style={{color:"black"}}className='movies__cards__img' />
              <div className='movies__cards__overlay'>
                <div className="movies__cards__title">{movie.Title}</div>
                <div className="movies__card__runtime">
                  {movie.Year}
                  <span className="movies__card__rating">{movie.imdbID}<i className="fas fa-star" /></span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Movies