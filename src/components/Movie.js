import React from 'react'
import { useState, useEffect } from 'react'
//import {movieData} from '../data/movieData';
import MovieCardList from './MovieCardList'
import MovieSearch from './MovieSearch';
import MovieSearchCheckBox from './MovieSearchCheckBox';
import '../css/movieCard.css'


const movieUrl = process.env.REACT_APP_DOMAIN + '/movie/getall/';

const Movie = () => {
  //console.log("in movie.js, props:");
  //console.log (props);
  //const movieData = props.movieData;
  const [movieData, setMovieData] = useState([])  
  useEffect(() => {
    fetch(movieUrl)
      .then(res => res.json())
      .then(data => setMovieData(data))
      .catch(err => console.log('Error during fetching the data', err))
  }, []) 
  
  //console.log(movieData);   //display whole data in console

  //movieData.map(movie => console.log(movie.genre_ids));  //extract and display the genre field in console

  //for searching movie title
  const [titleSearchField, settitleSearchField] = useState('')
  const onSearchChange = (event) => {
    settitleSearchField(event.target.value)
  }

  //for searching movie genres
  const [selectedGenres, setSelectedGenres] = useState([])
  const handleCheckboxChange = (event) => {
    const value = Number(event.target.value);
    if (event.target.checked) {
      setSelectedGenres([...selectedGenres, value]);
    } else {
      setSelectedGenres(selectedGenres.filter(id => id !== value));
    }
  };


  //handle filtered movies data
  const filteredMovies = movieData.filter(movie =>{
  return (
    movie.title.toLowerCase().includes(titleSearchField.toLowerCase()) &&   //movie title
    (selectedGenres.length === 0 || selectedGenres.every(genreId => movie.genre_ids.includes(genreId)))   //genres
  );
});

  

  return !movieData.length? <h2>Loading Movie Data...</h2> : 
  (
    /* for displaying cards and search filter*/

    <div className='moviePageContainer'>

      {/* for displaying cards */}    
      {
        filteredMovies.length === 0 
          ? <div className='cardContainer'><h2>No movie meet the search criteria</h2></div>
          : <MovieCardList movieData={filteredMovies} /> 
      }

      {/* for displaying search filter */}
      <div className='movieSearchContainer'>
        <h2>Movie Search</h2>
        
        <div className='movieFilter'>
          <div >
            <label className='movieSearchBox'><strong>Movie Title</strong></label>                       
            <div className='movieSearchBox'><MovieSearch searchChange={onSearchChange} /></div>
          </div>
        </div>

        <div className='movieFilter'>
            <label><strong>Genres</strong></label>
            <br></br>
            <br></br>

            <div>
              <MovieSearchCheckBox value="28" label="Action" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="12" label="Adventure" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="16" label="Animation" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="35" label="Comedy" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="80" label="Crime" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="99" label="Documentary" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="18" label="Drama" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="10751" label="Family" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="14" label="Fantasy" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="36" label="History" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="27" label="Horror" onChange={handleCheckboxChange} />
              <MovieSearchCheckBox value="10402" label="Music" onChange={handleCheckboxChange} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;


