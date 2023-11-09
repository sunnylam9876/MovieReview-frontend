import React from 'react';

const MovieSearchCheckBox = ({ value, label, onChange}) => {
  return (
    <div>
      <label className="checkbox-label">
        <input type="checkbox" value={value} onChange={onChange}/>
        {label}
      </label>
    </div>
  );
};

export default MovieSearchCheckBox;
