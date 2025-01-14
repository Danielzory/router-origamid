import React from 'react'
import './Header.css'
import {NavLink, useLocation} from 'react-router-dom'

//usando o link é possível fazer esta navegação, porém sem indicar qual esta ativo no momento
//também existe o navLink, funciona da mesma forma, porém indica qual página esta ativa no momento
//neste caso, na página home é necessário colocar o 'end'
//useLocation observa a rota, retorna um objeto com todos os paremetros desta, possível pegar o search, key, url entre outros

const Header = () => {

  const location = useLocation();
  
  React.useEffect(()=>{
    console.log("Mudou a rota")
  }, [location])
  return (
    <nav>
      <NavLink to='/' end >Home</NavLink> | <NavLink to='sobre'>Sobre</NavLink> | <NavLink to='login'>Login</NavLink>
    </nav>
  )
}

export default Header
