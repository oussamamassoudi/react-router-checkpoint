import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
function Moviecard({movie}) {
  return (
    <Card style={{ width: '18rem', margin:"10px" }}>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false} value={movie.rating}
  />
       <Link to={`/trailer/${movie.id}`} style={{textDecoration:"none", color:"white"}}> <Button variant="primary">Watch Trailer</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default Moviecard