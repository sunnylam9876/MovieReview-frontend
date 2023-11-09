import react from 'react';
import MovieCardSimple from './MovieCardSimple';
import '../css/popularMovieBanner.css';

const MovieCardSimpleList = ({ movieData }) => {
    return (
        <div className='popular-movie-banner-container'>
            <h1 className='popular-movie-banner-heading'>Popular Movies Today</h1>
            <div className='popular-movie-banner'>

                {
                    movieData.map((movie) => {
                        return (
                            <MovieCardSimple
                                key={movie.id}
                                movie_id={movie.id}
                                title={movie.title}
                                poster_path={movie.poster_path}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default MovieCardSimpleList;