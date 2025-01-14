import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to='produto/notebook'>Notebook</Link> | <Link to='produto/tablet'>Tablet</Link>
    </div>
  )
}

export default Home
