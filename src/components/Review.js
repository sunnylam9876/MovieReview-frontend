import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import MovieDetails from './MovieDetails';
import ReviewCardList from './ReviewCardList';
import ReviewSubmit from './ReviewSubmit';
import '../css/reviewCard.css';


const Review = () => {
   //------------------------------------------------------------
  //for fetching movie details data, use TMDB API
  const [movieDetailsData, setmovieDetailsData] = useState('');
  const {movie_id} = useParams();

  const TMDB_authorization = process.env.REACT_APP_TMDB_AUTHORIZATION;
  const movieDetailsUrl = process.env.REACT_APP_TMDB_MOVIEDETAIL_URL + `${movie_id}?language=en-US`;

  if (movie_id === undefined) {
    console.log("nothing");
    return <p>nothing to show</p>;
  }

  //get data from TMDB
  useEffect(() => {
    fetch(movieDetailsUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: TMDB_authorization
      }
    })
    .then(res => res.json())
    .then(data => setmovieDetailsData(data))
    .catch(err => console.log('Error during fetching the data', err))    
  }, []);
  //console.log(movieDetailsData);


 //------------------------------------------------------------
 //for fetching movie review data 
  const [reviewData, setReviewData] = useState('');

  const reviewUrl = process.env.REACT_APP_DOMAIN + `/review/getreviewbymovieid/${movie_id}/`

  useEffect(() => {
    fetch(reviewUrl)
      .then(res => res.json())
      .then(data => setReviewData(data))
      .catch(err => console.log('Error during fetching the data', err))
  }, []);


  
//------------------------------------------------------------
//display movie details and reviews

  return (
    
    <div className='reviewPageContainer'>

        {/* for displaying movie details */} 
        <div className='movieDetailsContainer'>
          {movieDetailsData ? <MovieDetails 
                                movieDetailsData={movieDetailsData} 
                              /> : 'Loading...'}
          <ReviewSubmit 
            movie_id = {movie_id}
          />
        </div>


        {/* for displaying review cards */} 
        <div>

          {reviewData ? <ReviewCardList reviewData={reviewData} /> : 'Loading...'}
        </div>    
    </div>
  )
}

export default Review;

