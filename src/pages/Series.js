import React from 'react'
import { Link } from 'react-router-dom'
import Serie from './Results/Serie'

const Series = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <h1>SERIES</h1>
      <Serie />
    </div>
  )
}

export default Series