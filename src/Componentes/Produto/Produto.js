import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const Produto = () => {
    const params = useParams();
  return (
    <>
     <h1>Produto: {params.id} </h1> 
     <nav>
        <NavLink to=''>Descrição</NavLink> | <NavLink to='avaliacao'>Avaliação</NavLink> | <NavLink to='produtoCustom'>Customização do produto</NavLink>
     </nav>
    
     <Outlet />
    </>
    
  )
}

export default Produto
