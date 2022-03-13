import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import s from './Profile.module.css';

const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();
    
    if(isLoading){
        return <div>Loading...</div>
    }

    return(
        isAuthenticated &&
        <div>
            <img src={user?.picture} alt={user?.name} className={s.image}/>
            <p className={s.email}>{user?.email}</p>
            <div className={s.container}>
            <Link to='/create'>
                <button className={s.button}>New Product</button>
            </Link>
            </div>
        </div>
    )
}

export default Profile;