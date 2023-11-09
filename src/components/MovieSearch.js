import React from 'react';

const MovieSearch = ({ searchfield, searchChange }) => {
  return (
    <div >
      <input
        className='input_textbox'
        type='search'
        placeholder='search'        
        onChange={searchChange}
      />
    </div>
  );
}
export default MovieSearch;