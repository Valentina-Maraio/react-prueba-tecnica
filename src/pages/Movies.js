import React from 'react'
import { Link } from 'react-router-dom'
import Movie from './Results/Movie'

const Movies = () => {

  return (
    <div>
      <Link to="/">HOME</Link>
      <h1>MOVIES</h1>
      <Movie />
    </div>
  )
}

export default Movies
