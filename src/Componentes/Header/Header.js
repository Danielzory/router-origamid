import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'

//usando o link é possível fazer esta navegação, porém sem indicar qual esta ativo no momento
//também existe o navLink, funciona da mesma forma, porém indica qual página esta ativa no momento
//neste caso, na página home é necessário colocar o 'end'

const Header = () => {
  return (
    <nav>
      <NavLink to='/' >Home</NavLink> | <NavLink to='sobre'>Sobre</NavLink> | <NavLink to='login'>Login</NavLink>
    </nav>
  )
}

export default Header
