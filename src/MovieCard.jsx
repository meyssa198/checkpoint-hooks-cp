import React from 'react';


const MovieCard = ({film}) => {
    // const {img, title,description}=film;
    console.log(film)
 return(
    <section id="moviecard">
    <img src={film.img} alt="Movie" className="movieimg" />
    <h1 id="titre">{film.title}</h1>
    <p id="description"> <span>description : </span>{film.description}</p>
    </section>
  )
}


export default MovieCard;
