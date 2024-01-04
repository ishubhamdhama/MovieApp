import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
import './css/Movies.css';

const Movies = () => {
  const { isMovie } = useGlobalContext();

  return (
    <div className='movies__cards__container'>
      {isMovie && isMovie.Title ? (
        <Link key={isMovie.imdbID} style={{ textDecoration: "none", color: "white" }} to={`/movie/${isMovie.imdbID}`}>
          <div className="card mb-3 card__center" style={{maxWidth: "800px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={isMovie.Poster} className="img-fluid rounded-start" alt="..." style={{height:"100%"}}/>
              </div>
              <div className="col-md-8">
                <div className="card-body movie__details">
                  <h5 className="card-title">{isMovie.Title}</h5>
                  <p className="card-text"><span className='bold__group'>Description - </span>{isMovie.Plot}</p>
                  <p className="card-text"><span className='bold__group'>Actors - </span>{isMovie.Actors}</p>
                  <p className="card-text"><span className='bold__group'>Writer - </span>{isMovie.Writer}</p>
                  <p className="card-text"><span className='bold__group'>imdbRating - </span>{isMovie.imdbRating}</p>
                  <p className="card-text"><span className='bold__group'>Genre - </span>{isMovie.Genre}</p>
                  <p className="card-text"><span className='bold__group'>Language - </span>{isMovie.Language}</p>
                  <p className="card-text"><small className="text-body-secondary">{isMovie.Released}</small></p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div>
          <h3 className='text-center'>Search Your Movie on the above input</h3>
        </div>
      )}
    </div>
  );
};

export default Movies;