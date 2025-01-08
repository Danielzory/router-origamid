import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = React.useState(false);
    const navigate = useNavigate();

    function handleClick () {
        setLogin(true)

        setTimeout(()=>{
            navigate('/sobre');
            setLogin(false)
        }, 2650);
    }

  return (
    <div>
      <h2>Realize seu login</h2>
      <button onClick={handleClick}>Logar</button>
      {login && <p>Login Realizado com sucesso!</p>}
    </div>
  )
}

export default Login
