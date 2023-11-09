import React from 'react';
import { useState, useEffect } from 'react';
import MovieCardSimpleList from './MovieCardSimpleList';

const Home = () => {

  const dbMovie = process.env.REACT_APP_DOMAIN + '/movie/getall';
  //console.log(dbMovie);

  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetch(dbMovie)
      .then(res => res.json())
      .then(data => setMovieData(data))
      .catch(err => console.log('error fetching data', err));
  }, []);
  // console.log(movieData);

  // popular movies on banner
  const moviesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextClick = () => {
    setCurrentPage(prevPage => (prevPage + 1) % Math.ceil(movieData.length / moviesPerPage));
  };

  const handlePrevClick = () => {
    setCurrentPage(prevPage => (prevPage - 1 + Math.ceil(movieData.length / moviesPerPage)) % Math.ceil(movieData.length / moviesPerPage));
  };

  const startIdx = currentPage * moviesPerPage;
  const endIdx = startIdx + moviesPerPage;
  const displayedMovies = movieData
    .filter(movie => !movie.genre_ids.includes(27))
    .slice(startIdx, endIdx);
  // console.log(displayedMovies);

  return (
    <div className="main-content home">
      <div className='popular-movie-banner-container'>
        {
          displayedMovies.length !== 0
            ? <MovieCardSimpleList movieData={displayedMovies} />
            : <div className='popular-movie-banner-empty'>
              <p>loading movies</p>
            </div>
        }
        <div className='banner-buttons'>
          {currentPage !== 0
            ? <button onClick={handlePrevClick}>Previous</button>
            : <button disabled>Previous</button>}
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
      <div className='text-area'>
        <h2>RMTV</h2>
        <p>
          A platform to discover movies & tv series, search for specific titles or by category, users can register an account, leave reviews, and star ratings. The website will be built with Node.js & Express, with React as website rendering. MongoDB acts as database to store all the data of movies, TV, user records, reviews, star ratings and more.
        </p></div>


    </div>
  );
};


export default Home;