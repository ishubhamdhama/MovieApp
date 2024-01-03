import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Screenshot 2023-12-25 201202.png';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <h2>MovieFlip</h2>
                    </Link>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse movie__nav" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/top_rated">Top Rated</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/upcoming">Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
