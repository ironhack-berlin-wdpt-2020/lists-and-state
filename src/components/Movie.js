import React from 'react';

function Movie(props) {
  return (
    <div>{props.title} – Director: {props.director}</div>
  )
}


export default Movie;