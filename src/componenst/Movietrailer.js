import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function Movietrailer({movies}) {
    const params=useParams();
    const movie = movies.filter((el)=>el.id==params.id)[0];
    console.log(movie)
  return (
    <div className='t-card-container'>
    <div className='m-trailer-card'>
        <img className='m-trailer-img' src={movie.posterurl}/>
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
        <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false} value={movie.rating}
  />
    </div>
    </div>
  )
}

export default Movietrailer