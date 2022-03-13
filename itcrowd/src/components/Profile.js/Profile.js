import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();
    console.log('user',user)
    if(isLoading){
        return <div>Loading...</div>
    }

    return(
        isAuthenticated &&
        <div>
            <img src={user.picture} alt={user.name}/>
            <p>{user.email}</p>
            <Link to='/create'>
                <button>New Product</button>
            </Link>
        </div>
    )
}

export default Profile;