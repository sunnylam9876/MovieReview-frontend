import React from 'react';
import { Link } from 'react-router-dom';
import '../css/popularMovieBanner.css';

const MovieCardSimple = (props) => {
    return (
        <div className='movie-card-simple'>
            <Link to={`/review/${props.movie_id}`}>
                <div className='movie-poster'>
                    <img src={'https://image.tmdb.org/t/p/w1280' + props.poster_path} />
                </div>
                <div className='movie-title card-title'>
                    <h3>{props.title}</h3>
                </div>
            </Link>
        </div>
    );
};

export default MovieCardSimple;