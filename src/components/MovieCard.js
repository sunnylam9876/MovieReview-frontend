import React from 'react';
import {Link} from 'react-router-dom';
import {MdOutlineRateReview} from 'react-icons/md';     //for write-review icon
//import {FaStar} from 'react-icons/fa';
import Rating from '@mui/material/Rating';              //using MUI library for star rating, refer to below comments
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
//https://mui.com/material-ui/react-rating/

const Card = (props) => {
    /* 
    const stars = Array.from({ length: Math.round(props.vote_average)/2 }, 
    (_, index) => (
        <FaStar key={index} className='starStyle' />        //calculate no.of star based on vote_average value
      )); */
      
    return(
        <div className='card'>        
                <div className='cardContent'>
                    {/* movie poster */}
                    <Link to={`/review/${props.movie_id}`}>
                        <img className='card_img' alt='movie' src={'https://image.tmdb.org/t/p/w300' + props.poster_path} /> 
                    </Link>

                    {/* movie title */}
                    <h3 className='cardTitle'>{props.title}</h3>
                    
                </div>
                <div className='cardFooter'>
                    <div>
                        {/* movie rating */}
                        <Rating name="read-only" value={ Math.round(props.vote_average)/2} precision={0.5} readOnly size="small" /> {props.vote_average}
                    </div>
                    <div>
                        {/* review icon */}
                        <Link to={`/review/${props.movie_id}`}>
                            <MdOutlineRateReview className='review_icon'/>
                        </Link>
                    </div>                    
                </div>
        </div>
    )
}

export default Card;



