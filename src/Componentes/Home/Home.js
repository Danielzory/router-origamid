import React from 'react'
import Head from '../Head/Head'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Head title = 'Home' description = 'Descrição... Home' />
      <h2>Home Page</h2>
      <Link to='produto/notebook'>Notebook</Link> | <Link to='produto/tablet'>Tablet</Link>
    </div>
  )
}

export default Home
