import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from './Logout.module.css';

const Logout = () => {
    const {logout} = useAuth0();

    return(
        <div className={s.container}>
        <button onClick={() => logout({ returnTo: window.location.origin})} className={s.button}>Logout</button>
        </div>
    )   
}

export default Logout;