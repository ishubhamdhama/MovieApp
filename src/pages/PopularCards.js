import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import '../css/PopularCards.css';
import { Link } from 'react-router-dom';

const PopularCards = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isCardDetail, setIsCardDetail] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
            .then(res => res.json())
            .then(data => {
                setIsCardDetail(data.results.slice(0, 14));
                setIsLoading(false); // Set isLoading to false after fetching data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Update loading state in case of an error
            });
    }, []);

    return (
        <>
        <div className='popular__title'>
            <h2>Popular</h2>
        </div>
            {isLoading ? (
                <div className=''>
                    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
            ) : (
                <div className='list__cards'>
                    {isCardDetail.map(movie => (
                        <Link key={movie.id} to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                            <div className='cards' key={movie.id}  data-aos="fade-right">
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className='cards__img' />
                                <div className='cards__overlay'>
                                    <div className="card__title">{movie.original_title}</div>
                                    <div className="card__runtime">
                                        {movie.release_date}
                                        <span className="card__rating">{movie.vote_average}<i className="fas fa-star" /></span>
                                    </div>
                                    <div className="card__description">{movie.overview.slice(0, 118) + "..."}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default PopularCards;
