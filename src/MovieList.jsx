import React from 'react';

import MovieCard from './MovieCard';


const MovieList = ({films}) => {
     return(
    <div id="movielist">
      {films.map((film,i)=>{
        // const {img, title,description}=film;     
         <MovieCard film={film} key={i} />
      
      })}
    </div>
  )
}

export default MovieList;
