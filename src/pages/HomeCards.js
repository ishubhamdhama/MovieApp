import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import '../css/HomeCard.css';

const HomeCards = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    return (
        <>
            <div className='dsd'>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    transitionTime={1000}
                    showStatus={false}
                    showArrows={true}
                    showIndicators={false}
                >
                    {popularMovies.map(movie => {
                        return (
                            <Link style={{ textDecoration: "none", color: "white" }} to="/" key={movie.id}>
                                <div className='posterImage'>
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                </div>
                                <div className='posterImage_overlay'>
                                    <div className='posterImage__title'>{movie ? movie.original_title : ""}</div>
                                    <div className='posterImage_runtime'>
                                        {movie ? movie.release_date : ""}

                                        <span className='posterImage_rating'>
                                            {movie ? movie.vote_average : ""}
                                            <i className='fa fa-star'>{" "}</i>
                                        </span>
                                    </div>
                                    <div className='posterImage_description'> {movie ? movie.overview.slice(0, 100) + "..." : ""} </div>
                                </div>
                            </Link>
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default HomeCards