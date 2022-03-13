import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import s from './Login.module.css';

const Login = () => {
  const {loginWithRedirect} = useAuth0();
  return(
    <div>
      <button onClick={() => loginWithRedirect()} className={s.button}>Log In</button>
    </div>
  )
}

export default Login;