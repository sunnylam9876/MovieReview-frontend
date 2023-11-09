import React, { useState } from 'react';
//import {Link} from 'react-router-dom';
//import {MdOutlineRateReview} from 'react-icons/md';
//import {FaStar} from 'react-icons/fa';
import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
// import ReviewSubmit from './ReviewSubmit';
import '../css/movieDetails.css';

const MovieDetails = (props) => {  

    return(
        <div className='movieDetailsContainer'>
            <img className='moive_img' alt='movie' src={process.env.REACT_APP_TMDB_IMAGE_URL + props.movieDetailsData.poster_path} /> 
            <h1>{props.movieDetailsData.title}</h1>
            <p className='movie_detail_overview'>{props.movieDetailsData.overview}</p>
            {/* <p>{stars} {parseFloat(props.movieDetailsData.vote_average.toFixed(1))}</p> */}
            <p><Rating name="read-only" value={ Math.round(props.movieDetailsData.vote_average)/2} precision={0.5} readOnly size="small" /> 
            {props.movieDetailsData.vote_average.toFixed(1)}</p>
        </div>
    )
}

export default MovieDetails;


