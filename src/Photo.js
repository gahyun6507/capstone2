// Photo.js

import React from 'react';

function Photo(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.alt} style={{ width: '50px', height: '50px' }} />
    </div>
  );
}

export default Photo;
